export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          business_id: string
          customer_id: string
          service_id: string | null
          staff_member_id: string | null
          appointment_date: string
          start_time: string
          end_time: string
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
          notes: string | null
          google_calendar_event_id: string | null
          confirmation_sent_at: string | null
          reminder_sent_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id: string
          customer_id: string
          service_id?: string | null
          staff_member_id?: string | null
          appointment_date: string
          start_time: string
          end_time: string
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
          notes?: string | null
          google_calendar_event_id?: string | null
          confirmation_sent_at?: string | null
          reminder_sent_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          customer_id?: string
          service_id?: string | null
          staff_member_id?: string | null
          appointment_date?: string
          start_time?: string
          end_time?: string
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
          notes?: string | null
          google_calendar_event_id?: string | null
          confirmation_sent_at?: string | null
          reminder_sent_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_staff_member_id_fkey"
            columns: ["staff_member_id"]
            isOneToOne: false
            referencedRelation: "staff_members"
            referencedColumns: ["id"]
          }
        ]
      }
      business_config: {
        Row: {
          id: string
          business_id: string
          ai_prompt: string | null
          booking_rules: Json | null
          faq_data: Json | null
          integration_settings: Json | null
          ai_response_mode: string | null
          allowed_ai_topics: string[] | null
          restricted_ai_topics: string[] | null
          ai_voice: string | null
          sms_enabled: boolean | null
          sms_confirmation_template: string | null
          sms_reminder_template: string | null
          sms_cancellation_template: string | null
          bypass_phone_number: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id: string
          ai_prompt?: string | null
          booking_rules?: Json | null
          faq_data?: Json | null
          integration_settings?: Json | null
          ai_response_mode?: string | null
          allowed_ai_topics?: string[] | null
          restricted_ai_topics?: string[] | null
          ai_voice?: string | null
          sms_enabled?: boolean | null
          sms_confirmation_template?: string | null
          sms_reminder_template?: string | null
          sms_cancellation_template?: string | null
          bypass_phone_number?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          ai_prompt?: string | null
          booking_rules?: Json | null
          faq_data?: Json | null
          integration_settings?: Json | null
          ai_response_mode?: string | null
          allowed_ai_topics?: string[] | null
          restricted_ai_topics?: string[] | null
          ai_voice?: string | null
          sms_enabled?: boolean | null
          sms_confirmation_template?: string | null
          sms_reminder_template?: string | null
          sms_cancellation_template?: string | null
          bypass_phone_number?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_config_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: true
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
      businesses: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          phone_number: string
          email: string | null
          address: string | null
          timezone: string
          business_hours: Json | null
          status: 'active' | 'inactive' | 'suspended'
          settings: Json
          google_calendar_id: string | null
          business_type: string | null
          payment_methods: string[] | null
          holidays: Json | null
          ai_greeting: string | null
          key_information: string | null
          customer_notes_enabled: boolean | null
          booking_policies: Json | null
          minutes_allowed: number
          minutes_used: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          phone_number: string
          email?: string | null
          address?: string | null
          timezone?: string
          business_hours?: Json | null
          status?: 'active' | 'inactive' | 'suspended'
          settings?: Json
          google_calendar_id?: string | null
          business_type?: string | null
          payment_methods?: string[] | null
          holidays?: Json | null
          ai_greeting?: string | null
          key_information?: string | null
          customer_notes_enabled?: boolean | null
          booking_policies?: Json | null
          minutes_allowed?: number
          minutes_used?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          phone_number?: string
          email?: string | null
          address?: string | null
          timezone?: string
          business_hours?: Json | null
          status?: 'active' | 'inactive' | 'suspended'
          settings?: Json
          google_calendar_id?: string | null
          business_type?: string | null
          payment_methods?: string[] | null
          holidays?: Json | null
          ai_greeting?: string | null
          key_information?: string | null
          customer_notes_enabled?: boolean | null
          booking_policies?: Json | null
          minutes_allowed?: number
          minutes_used?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      call_logs: {
        Row: {
          id: string
          business_id: string
          customer_id: string | null
          appointment_id: string | null
          twilio_call_sid: string | null
          caller_phone: string
          business_phone: string
          status: 'incoming' | 'in_progress' | 'completed' | 'failed'
          duration_seconds: number | null
          recording_url: string | null
          transcript: string | null
          ai_summary: string | null
          intent_detected: string | null
          started_at: string
          ended_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          customer_id?: string | null
          appointment_id?: string | null
          twilio_call_sid?: string | null
          caller_phone: string
          business_phone: string
          status?: 'incoming' | 'in_progress' | 'completed' | 'failed'
          duration_seconds?: number | null
          recording_url?: string | null
          transcript?: string | null
          ai_summary?: string | null
          intent_detected?: string | null
          started_at?: string
          ended_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          customer_id?: string | null
          appointment_id?: string | null
          twilio_call_sid?: string | null
          caller_phone?: string
          business_phone?: string
          status?: 'incoming' | 'in_progress' | 'completed' | 'failed'
          duration_seconds?: number | null
          recording_url?: string | null
          transcript?: string | null
          ai_summary?: string | null
          intent_detected?: string | null
          started_at?: string
          ended_at?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "call_logs_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_logs_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_logs_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          }
        ]
      }
      conversation_context: {
        Row: {
          id: string
          call_log_id: string
          business_id: string
          context_data: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          call_log_id: string
          business_id: string
          context_data: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          call_log_id?: string
          business_id?: string
          context_data?: Json
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_context_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_context_call_log_id_fkey"
            columns: ["call_log_id"]
            isOneToOne: false
            referencedRelation: "call_logs"
            referencedColumns: ["id"]
          }
        ]
      }
      customers: {
        Row: {
          id: string
          business_id: string
          phone: string
          first_name: string | null
          last_name: string | null
          email: string | null
          notes: string | null
          preferences: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id: string
          phone: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          notes?: string | null
          preferences?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          phone?: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          notes?: string | null
          preferences?: Json
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
      services: {
        Row: {
          id: string
          business_id: string
          name: string
          description: string | null
          duration_minutes: number
          price: number | null
          currency: string
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id: string
          name: string
          description?: string | null
          duration_minutes: number
          price?: number | null
          currency?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          name?: string
          description?: string | null
          duration_minutes?: number
          price?: number | null
          currency?: string
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
      sms_messages: {
        Row: {
          id: string
          business_id: string
          customer_id: string
          appointment_id: string | null
          twilio_message_sid: string | null
          phone_from: string
          phone_to: string
          message_body: string
          message_type: string | null
          status: string | null
          sent_at: string
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          customer_id: string
          appointment_id?: string | null
          twilio_message_sid?: string | null
          phone_from: string
          phone_to: string
          message_body: string
          message_type?: string | null
          status?: string | null
          sent_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          customer_id?: string
          appointment_id?: string | null
          twilio_message_sid?: string | null
          phone_from?: string
          phone_to?: string
          message_body?: string
          message_type?: string | null
          status?: string | null
          sent_at?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_messages_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sms_messages_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sms_messages_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          }
        ]
      }
      staff_members: {
        Row: {
          id: string
          business_id: string
          user_id: string
          name: string
          email: string | null
          phone: string | null
          specialties: string[] | null
          working_hours: Json | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id: string
          user_id: string
          name: string
          email?: string | null
          phone?: string | null
          specialties?: string[] | null
          working_hours?: Json | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          user_id?: string
          name?: string
          email?: string | null
          phone?: string | null
          specialties?: string[] | null
          working_hours?: Json | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_members_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          id: string
          business_id: string | null
          clerk_user_id: string
          email: string
          phone: string | null
          first_name: string | null
          last_name: string | null
          role: 'owner' | 'admin' | 'staff' | 'customer'
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_id?: string | null
          clerk_user_id: string
          email: string
          phone?: string | null
          first_name?: string | null
          last_name?: string | null
          role?: 'owner' | 'admin' | 'staff' | 'customer'
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_id?: string | null
          clerk_user_id?: string
          email?: string
          phone?: string | null
          first_name?: string | null
          last_name?: string | null
          role?: 'owner' | 'admin' | 'staff' | 'customer'
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "businesses"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_business_with_owner: {
        Args: {
          p_clerk_user_id: string
          p_email: string
          p_first_name: string
          p_last_name: string
          p_business_name: string
          p_business_slug: string
          p_phone_number: string
          p_business_type?: string
          p_address?: string
          p_timezone?: string
        }
        Returns: string
      }
      update_ai_configuration: {
        Args: {
          p_business_id: string
          p_ai_response_mode?: string
          p_allowed_topics?: string[]
          p_restricted_topics?: string[]
          p_ai_prompt?: string
          p_booking_rules?: Json
          p_faq_data?: Json
          p_ai_voice?: string
          p_bypass_phone_number?: string
        }
        Returns: boolean
      }
      update_business_settings: {
        Args: {
          p_business_id: string
          p_business_type?: string
          p_payment_methods?: string[]
          p_business_hours?: Json
          p_holidays?: Json
          p_ai_greeting?: string
          p_key_information?: string
          p_customer_notes_enabled?: boolean
          p_booking_policies?: Json
        }
        Returns: boolean
      }
      current_user_has_role: {
        Args: {
          required_roles: ('owner' | 'admin' | 'staff' | 'customer')[]
        }
        Returns: boolean
      }
      get_business_by_phone: {
        Args: {
          phone_number: string
        }
        Returns: {
          business_id: string
          business_name: string
          business_slug: string
        }[]
      }
      get_current_clerk_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_current_user_business_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      log_incoming_call: {
        Args: {
          p_business_phone: string
          p_caller_phone: string
          p_twilio_call_sid: string
        }
        Returns: string
      }
    }
    Enums: {
      appointment_status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show'
      business_status: 'active' | 'inactive' | 'suspended'
      call_status: 'incoming' | 'in_progress' | 'completed' | 'failed'
      user_role: 'owner' | 'admin' | 'staff' | 'customer'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[keyof Database]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never