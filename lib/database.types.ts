export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      bussiness: {
        Row: {
          address: string | null;
          created_at: string | null;
          id: string;
          is_active: boolean | null;
          is_onboarded: boolean | null;
          logo: string | null;
          name: string | null;
          phone: number | null;
          type: Database["public"]["Enums"]["bussiness_type"] | null;
          username: string | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string | null;
          id?: string;
          is_active?: boolean | null;
          is_onboarded?: boolean | null;
          logo?: string | null;
          name?: string | null;
          phone?: number | null;
          type?: Database["public"]["Enums"]["bussiness_type"] | null;
          username?: string | null;
        };
        Update: {
          address?: string | null;
          created_at?: string | null;
          id?: string;
          is_active?: boolean | null;
          is_onboarded?: boolean | null;
          logo?: string | null;
          name?: string | null;
          phone?: number | null;
          type?: Database["public"]["Enums"]["bussiness_type"] | null;
          username?: string | null;
        };
        Relationships: [];
      };
      category: {
        Row: {
          created_at: string;
          created_by: string | null;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      customers: {
        Row: {
          created_at: string;
          id: string;
          is_active: boolean | null;
          is_onboarded: boolean | null;
          name: string | null;
          phone: number | null;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_active?: boolean | null;
          is_onboarded?: boolean | null;
          name?: string | null;
          phone?: number | null;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_active?: boolean | null;
          is_onboarded?: boolean | null;
          name?: string | null;
          phone?: number | null;
          username?: string | null;
        };
        Relationships: [];
      };
      order_items: {
        Row: {
          created_at: string;
          created_by: string | null;
          id: string;
          product_id: string | null;
          quantity: Json[] | null;
        };
        Insert: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          product_id?: string | null;
          quantity?: Json[] | null;
        };
        Update: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          product_id?: string | null;
          quantity?: Json[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "order_items_product_id_fkey";
            columns: ["product_id"];
            referencedRelation: "products";
            referencedColumns: ["id"];
          }
        ];
      };
      orders: {
        Row: {
          created_at: string;
          created_by: string | null;
          customer_id: string | null;
          id: number;
          items: string[] | null;
        };
        Insert: {
          created_at?: string;
          created_by?: string | null;
          customer_id?: string | null;
          id?: number;
          items?: string[] | null;
        };
        Update: {
          created_at?: string;
          created_by?: string | null;
          customer_id?: string | null;
          id?: number;
          items?: string[] | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          quantity: ReactNode;
          address: string | null;
          created_at: string;
          created_by: string | null;
          id: string;
          "is_out of stock": boolean | null;
          mrp: number | null;
          name: string;
          price: number | null;
          unit: number | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          created_by?: string | null;
          id?: string;
          "is_out of stock"?: boolean | null;
          mrp?: number | null;
          name: string;
          price?: number | null;
          unit?: number | null;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          created_by?: string | null;
          id?: string;
          "is_out of stock"?: boolean | null;
          mrp?: number | null;
          name?: string;
          price?: number | null;
          unit?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      delete_claim: {
        Args: {
          uid: string;
          claim: string;
        };
        Returns: string;
      };
      get_claim: {
        Args: {
          uid: string;
          claim: string;
        };
        Returns: Json;
      };
      get_claims: {
        Args: {
          uid: string;
        };
        Returns: Json;
      };
      get_my_claim: {
        Args: {
          claim: string;
        };
        Returns: Json;
      };
      get_my_claims: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      is_claims_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      set_claim: {
        Args: {
          uid: string;
          claim: string;
          value: Json;
        };
        Returns: string;
      };
    };
    Enums: {
      bussiness_type:
        | "grocery"
        | "bakery"
        | "vegitabls"
        | "super market"
        | "fancy"
        | "other";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey";
            columns: ["owner"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
