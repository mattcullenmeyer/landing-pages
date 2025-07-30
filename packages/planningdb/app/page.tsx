'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_ID = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!;
const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN!;

const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`;

const CallToAction = () => {
  const { toast } = useToast();
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

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
              },
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      form.reset();
      toast({
        title: 'Success!',
        description: 'You have successfully joined the waitlist',
        duration: 3000,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex w-full max-w-md flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 mt-8"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your business email"
        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity50"
      />
      <Button className="w-full sm:w-auto" size="lg" type="submit">
        Join Waitlist
      </Button>
    </form>
  );
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Lightweight data consolidation and version control for
                  planning in spreadsheets
                </h1>
                <p className="mx-auto max-w-3xl md:text-xl dark:text-gray-400 text-black">
                  Consolidate, version, and permission your financial plans with
                  two-way syncing between Excel, Google Sheets, and your data
                  warehouse.
                </p>
              </div>
              <CallToAction />
            </div>
          </div>
        </section>

        {/* New Heading Section */}
        <section className="flex justify-center w-full py-12 md:pt-20 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl tracking-tight sm:text-4xl font-bold md:text-4xl">
              {'Most companies that have an FP&A tool still use spreadsheets'}
            </h2>
          </div>
        </section>

        {/* Existing Tools Section */}
        <section className="w-full py-12 bg-white md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
              {/* Text Content */}
              <div className="px-4 md:px-6">
                <div className="space-y-4">
                  <div className="text-sm tracking-widest uppercase text-black font-normal">
                    <Badge className="bg-[#fff382] px-2 py-1 rounded-[14px] tracking-widest uppercase font-semibold bg-black text-white">
                      EXISTING TOOLS
                    </Badge>
                  </div>
                  <h2 className="font-bold tracking-tight text-2xl sm:text-3xl">
                    FP&A software is overbuilt and underused
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-black text-lg">
                      Enterprise tools solve consolidation, versioning, and
                      permissions really well. But teams are{' '}
                      <span className="font-bold">
                        still using spreadsheets
                      </span>{' '}
                      for planning, reporting, and analysis.
                    </p>
                    <p className="text-black text-lg">
                      {`FP&A systems have become expensive places to store spreadsheets.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className="px-4 md:px-6">
                <Card className="p-6 bg-[#fff382] bg-white border-gray-400">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-primary" />
                      <blockquote className="text-md sm:text-lg font-medium leading-relaxed">
                        {`"Planning software is really only used as a central
                        source of truth. Planning happens outside of it."`}
                      </blockquote>
                      <p className="text-sm text-black">— Finance Manager</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="w-full py-12 bg-white md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center lg:grid-flow-col-dense">
              {/* Text Content */}
              <div className="order-1 lg:order-2 px-4 md:px-6 lg:col-start-2">
                <div className="space-y-4">
                  <div className="text-sm tracking-widest uppercase text-black font-normal">
                    <Badge className="bg-[#fff382] px-2 py-1 rounded-[14px] tracking-widest uppercase bg-black text-white font-semibold">
                      OUR APPROACH
                    </Badge>
                  </div>
                  <h2 className="font-bold tracking-tight text-2xl sm:text-3xl">
                    Lightweight, flexible, and reliable
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="text-black text-lg">
                      Spreadsheets are flexible but fragile. EPM tools are
                      structured but bloated.
                    </p>
                    <p className="text-black text-lg">
                      PlanningDB gives you the best of both:{' '}
                      <span className="font-bold">
                        version control, centralized planning, and role-based
                        access
                      </span>
                      , without forcing you into a new modeling engine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className="order-2 lg:order-1 px-4 md:px-6">
                <Card className="p-6 bg-white border-gray-400">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-primary" />
                      <blockquote className="text-md sm:text-lg font-medium leading-relaxed">
                        {`"FP&A tools are focused on getting everyone into the
                        product, but nobody wants to use it. Everyone exports
                        everything so they can import it to other tools."`}
                      </blockquote>
                      <p className="text-sm text-black">— Director, Finance</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Spreadsheet-Native Section */}
        <section className="w-full py-12 bg-white md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
              {/* Text Content - Left Half */}
              <div className="px-4 md:px-6">
                <div className="space-y-4">
                  <div className="text-sm tracking-widest uppercase text-black font-normal">
                    <Badge className="bg-[#fff382] px-2 py-1 rounded-[14px] tracking-widest uppercase bg-black text-white font-semibold">
                      SPREADSHEET-NATIVE
                    </Badge>
                  </div>
                  <h2 className="font-bold tracking-tight text-2xl sm:text-3xl">
                    Bi-direction sync to spreadsheets
                  </h2>
                  <div className="space-y-3">
                    <p className="text-black text-lg">
                      PlanningDB directly{' '}
                      <span className="font-bold">
                        connects to Excel and Google Sheets
                      </span>{' '}
                      so you can keep planning where you already work.
                    </p>
                    <p className="text-black text-lg">
                      No need to switch tools or learn a new formula language.
                      Everything stays familiar, just more reliable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Card - Right Half */}
              <div className="px-4 md:px-6">
                <Card className="p-6 bg-[#fff382] bg-white border-slate-400">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-primary" />
                      <blockquote className="text-md sm:text-lg font-medium leading-relaxed">
                        {`"Spreadsheets are alluring because you can do whatever
                        you want. You can push spreadsheets very far before you
                        need something else."`}
                      </blockquote>
                      <p className="text-sm text-black">
                        — Director of GTM Strategic Finance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Warehouse-Native Section */}
        <section className="w-full py-12 bg-white md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center lg:grid-flow-col-dense">
              {/* Text Content */}
              <div className="order-1 lg:order-2 px-4 md:px-6 lg:col-start-2">
                <div className="space-y-4">
                  <div className="text-sm tracking-widest uppercase text-black font-normal">
                    <Badge className="bg-[#fff382] px-2 py-1 rounded-[14px] tracking-widest uppercase bg-black text-white font-semibold">
                      WAREHOUSE-NATIVE
                    </Badge>
                  </div>
                  <h2 className="font-bold tracking-tight text-2xl sm:text-3xl">
                    Save plans directly to your data warehouse
                  </h2>
                  <div className="space-y-3">
                    <p className="text-black text-lg">
                      Most planning tools create yet{' '}
                      <span className="font-bold">another data silo</span>.
                    </p>
                    <p className="text-black text-lg">
                      PlanningDB supports two-way syncing with your cloud data
                      warehouse so you can model in spreadsheets and{' '}
                      <span className="font-bold">
                        report from the warehouse
                      </span>
                      .
                    </p>
                    <p className="text-black text-lg">
                      No extra exports. No extra steps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote Card */}
              <div className="order-2 lg:order-1 px-4 md:px-6">
                <Card className="p-6 bg-white border-slate-400">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      <Quote className="h-8 w-8 text-primary" />
                      <blockquote className="text-md sm:text-lg font-medium leading-relaxed">
                        {`"EPM wants to be kind of like a data warehouse. They
                        want you to bring in all the data. But I don't want to
                        be moving data around."`}
                      </blockquote>
                      <p className="text-sm text-black">
                        — VP Strategic Finance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* New Features Section */}
        <section className="flex justify-center w-full py-12 md:py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  PlanningDB adds what spreadsheets lack
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-gray-800">
                  Get the flexibility of spreadsheets with the structure of a
                  database.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-3 lg:gap-12">
              {/* Data Consolidation Card */}
              <Card className="p-6 bg-white border-slate-400">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center font-semibold">
                    Consolidation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="space-y-3">
                    <p className="text-black">
                      Consolidate multiple spreadsheets into a single structured
                      and reliable data source.
                    </p>
                  </div>
                  <div className="space-y-4 pt-4 border-t mt-4 border-slate-300">
                    <blockquote className="font-medium leading-relaxed text-sm">
                      {`"Every department does their own thing so spreadsheets
                      proliferate and @#$%!& becomes just a repository."`}
                    </blockquote>
                    <p className="text-sm text-black">
                      — Senior Manager, FP&A Systems
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Version Control Card */}
              <Card className="p-6 bg-white border-slate-400">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center font-semibold">
                    Version Control
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="space-y-3">
                    <p className="text-black">
                      Lock finalized versions, compare plans vs actuals, and
                      track every change in a full audit log.
                    </p>
                  </div>
                  <div className="space-y-4 pt-4 border-t mt-4 border-gray-300">
                    <blockquote className="font-medium leading-relaxed text-sm">
                      {`"Planning tools like @#$%!& are basically for version
                      control."`}
                    </blockquote>
                    <p className="text-sm text-black">
                      — Senior Finance Manager
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Access Control Card */}
              <Card className="p-6 bg-white border-slate-400">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center font-semibold">
                    Permissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="space-y-3">
                    <p className="text-black">
                      Define who can view or edit by role, dimension, and model
                      with simple access controls.
                    </p>
                  </div>
                  <div className="space-y-4 pt-4 border-t mt-4 border-gray-300">
                    <blockquote className="font-medium leading-relaxed text-sm">
                      {`"Getting access controls exactly right is tricky in
                      @#$%!&."`}
                    </blockquote>
                    <p className="text-sm text-black">— VP of Finance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex justify-center w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Designed for the realities of modern planning{' '}
                </h2>
                <p className="mx-auto max-w-[600px] md:text-xl dark:text-gray-400 text-gray-800">
                  PlanningDB fits into the tools your team already uses without
                  the overhead of managing a complex system.
                </p>
              </div>
              <CallToAction />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
