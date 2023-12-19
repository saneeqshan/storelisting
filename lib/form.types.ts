import { z } from "zod";

//auth

export const authSchema = z.object({
  emailOrPhone: z.union([
    z.string().email("Please enter valid email or phone"), // Validate email using Zod
    z.string().regex(/^\d{10}$/), // Validate phone number using Zod (assuming a 10-digit format)
  ]),
});

export type TauthSchema = {
  emailOrPhone: string;
};

///productFormSchema
export const productFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  price: z
    .number()
    .min(0, "Price must be greater than or equal to 0")
    .max(1000000, "Price must be less than or equal to 1000000"),
  mrp: z
    .number()
    .min(0, "Price must be greater than or equal to 0")
    .max(1000000, "Price must be less than or equal to 1000000"),
  unit: z.number(),
});

export type TProductformSchema = z.infer<typeof productFormSchema>;

// onboarding schema
export const onboardingFormSchema = z.object({});
