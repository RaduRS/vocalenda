# Clerk Webhook Setup Guide

This guide will help you set up and test the Clerk webhook integration with ngrok for development.

## Prerequisites

1. Install ngrok: `npm install -g ngrok` or download from [ngrok.com](https://ngrok.com)
2. Have your Next.js development server ready to run
3. Access to your Clerk Dashboard

## Setup Steps

### 1. Start your development server
```bash
npm run dev
```
Your app should be running on `http://localhost:3000`

### 2. Start ngrok tunnel
In a new terminal window:
```bash
ngrok http 3000
```

This will give you a public URL like: `https://abc123.ngrok.io`

### 3. Configure Clerk Webhook

1. Go to your [Clerk Dashboard](https://dashboard.clerk.com)
2. Navigate to your application
3. Go to **Webhooks** in the sidebar
4. Click **Add Endpoint**
5. Set the endpoint URL to: `https://your-ngrok-url.ngrok.io/api/webhooks/clerk`
6. Select the events you want to listen to:
   - `user.created`
   - `user.updated` 
   - `user.deleted`
7. Click **Create**
8. **Important**: Copy the webhook secret (starts with `whsec_`) from the webhook details page

### 4. Add environment variables

Add to your `.env.local` file:
```env
# Add your Clerk webhook secret (from step 3.8)
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Add your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 5. Test the webhook

1. Create a new user account through your sign-up page
2. Check your development server logs for webhook events
3. You should see logs like:
   ```
   Webhook received: user.created
   User created: user_abc123
   User payload for creation: { id: 'user_abc123', email: 'test@example.com', ... }
   ```

## Troubleshooting

### Webhook not receiving events
- Ensure ngrok is running and the URL is correct
- Check that the webhook endpoint URL in Clerk Dashboard is correct
- Verify the signing secret is properly set in environment variables

### Signature verification errors
- The current implementation skips signature verification for development
- To enable it, uncomment the svix verification code in the webhook route
- Install svix: `npm install svix`

### Testing webhook events
- Use Clerk's webhook testing feature in the dashboard
- Create/update/delete test users to trigger events
- Monitor your development server logs for incoming webhooks

## Next Steps

Once webhooks are working:
1. Implement Supabase integration in the webhook handlers
2. Add proper error handling and retry logic
3. Set up webhook signature verification for production
4. Configure webhook endpoints for your production environment

## Production Considerations

- Always verify webhook signatures in production
- Use proper error handling and logging
- Implement idempotency to handle duplicate events
- Set up monitoring and alerting for webhook failures
- Use environment-specific webhook endpoints