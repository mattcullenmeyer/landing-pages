'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_ID = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!;
const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN!;

const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;

export default function WaitlistForm() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: 'Please enter a valid email',
        description: 'Example: alex@example.com',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
                'Created at': new Date().toISOString().split('T')[0],
                Page: 'Escapehatch',
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      toast({
        title: 'Success!',
        description: 'You have successfully joined the waitlist',
        duration: 5000,
      });
      setEmail('');
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2" aria-label="Join waitlist">
      <div className="sr-only" id="waitlist-label">
        Join waitlist form
      </div>
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="you@example.com"
        aria-labelledby="waitlist-label"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button
        type="submit"
        className="bg-emerald-600 text-white hover:bg-emerald-700"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Joining…
          </span>
        ) : (
          'Join waitlist'
        )}
      </Button>
    </form>
  );
}
