import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { UserJSON } from '@clerk/nextjs/server';
import { Webhook } from 'svix';
import { supabaseAdmin } from '@/lib/supabase';
import { getCurrentUKDateTime } from '@/lib/date-utils';

export async function POST(req: Request) {
  const headerPayload = await headers();
  const body = await req.text();

  // Verify webhook signature
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return new Response('Webhook secret not configured', { status: 500 });
  }

  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  let event: WebhookEvent;

  try {
    const wh = new Webhook(webhookSecret);
    event = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch {
    return new Response('Invalid webhook signature', { status: 400 });
  }

  const { type, data } = event;

  try {
    switch (type) {
      case 'user.created':
        await handleUserCreated(data);
        break;
      case 'user.updated':
        await handleUserUpdated(data);
        break;
      case 'user.deleted':
        await handleUserDeleted(data);
        break;
      default:
        // Unhandled webhook type
    }
  } catch {
    return new Response('Webhook processing failed', { status: 500 });
  }

  return new Response('Webhook processed', { status: 200 });
}

async function handleUserCreated(userData: WebhookEvent['data']) {
  const user = userData as UserJSON;
  const primaryEmail = user.email_addresses.find(email => email.id === user.primary_email_address_id);
  
  if (!primaryEmail) {
    return;
  }

  try {
    // Insert user into Supabase
    const { error } = await supabaseAdmin
      .from('users')
      .insert({
        clerk_user_id: user.id,
        email: primaryEmail.email_address,
        first_name: user.first_name,
        last_name: user.last_name,
        role: 'customer', // Default role, can be updated later
        is_active: true,
      });

    // If user already exists (duplicate key error), that's fine - ignore it
    if (error && error.code !== '23505') {
      throw error;
    }
  } catch (error) {
    // Only throw if it's not a duplicate key error
    if (error && typeof error === 'object' && 'code' in error && error.code !== '23505') {
      throw error;
    }
  }
}

async function handleUserUpdated(userData: WebhookEvent['data']) {
  const user = userData as UserJSON;
  const primaryEmail = user.email_addresses.find(email => email.id === user.primary_email_address_id);
  
  if (!primaryEmail) {
    return;
  }

  try {
    // Update user in Supabase
    const { error } = await supabaseAdmin
      .from('users')
      .update({
        email: primaryEmail.email_address,
        first_name: user.first_name,
        last_name: user.last_name,
        updated_at: getCurrentUKDateTime().toISOString(),
      })
      .eq('clerk_user_id', user.id);

    if (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

async function handleUserDeleted(userData: WebhookEvent['data']) {
  const deletedUser = userData as { id: string };
  
  try {
    // Soft delete: deactivate user instead of hard delete
    const { error } = await supabaseAdmin
      .from('users')
      .update({
        is_active: false,
        updated_at: getCurrentUKDateTime().toISOString(),
      })
      .eq('clerk_user_id', deletedUser.id);

    if (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
}