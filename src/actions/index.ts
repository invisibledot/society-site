// src/actions/index.ts
import { defineAction } from 'astro:actions';
import { z } from 'zod'; // The direct, stable import

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
      message: z.string().min(10),
    }),
    handler: async (input) => {
      // Logic for sending the email goes here
      return { success: true, message: "Message received!" };
    },
  }),
};