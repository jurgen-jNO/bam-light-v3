import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, ArrowRight, Check } from "lucide-react";
import MainNavigation from "@/components/MainNavigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  voornaam: z
    .string()
    .min(1, "Voornaam is verplicht")
    .max(100, "Maximaal 100 tekens"),
  naam: z
    .string()
    .min(1, "Naam is verplicht")
    .max(100, "Maximaal 100 tekens"),
  email: z
    .string()
    .min(1, "E-mail is verplicht")
    .email("Ongeldig e-mailadres")
    .max(255, "Maximaal 255 tekens"),
  mobile: z
    .string()
    .min(1, "Telefoonnummer is verplicht")
    .max(50, "Maximaal 50 tekens"),
  bedrijf: z
    .string()
    .min(1, "Bedrijf is verplicht")
    .max(200, "Maximaal 200 tekens"),
  opleidingsnood: z
    .string()
    .min(1, "Omschrijf uw opleidingsnood")
    .max(2000, "Maximaal 2000 tekens"),
});

type FormValues = z.infer<typeof formSchema>;

export default function OpleidingOpMaat() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voornaam: "",
      naam: "",
      email: "",
      mobile: "",
      bedrijf: "",
      opleidingsnood: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Op maat aanvraag:", data);
    toast.success("Aanvraag verzonden! We nemen spoedig contact met je op.");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="text-xs text-foreground/50 mb-6">
            <a href="/agenda" className="hover:text-foreground">Academy</a>
            <span className="mx-2">/</span>
            <a href="/agenda" className="hover:text-foreground">Agenda</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Op maat</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left: intro */}
            <div className="lg:col-span-2">
              <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">
                [ opleiding op maat ]
              </p>
              <h1 className="text-3xl font-bold text-foreground leading-tight mb-4">
                Opleiding op maat van jouw bedrijf
              </h1>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                Wil je een opleiding of training laten organiseren die volledig
                afgestemd is op de noden van jouw team of organisatie? BAM
                Academy helpt je graag verder.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                Vul het formulier in en we contacteren je binnen de 2 werkdagen
                voor een vrijblijvend voorstel.
              </p>

              <div className="border border-dashed border-foreground/30 p-4 bg-foreground/[0.02]">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">
                  Wat kun je verwachten?
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-foreground/50 shrink-0" />
                    <span>Analyse van je opleidingsnood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-foreground/50 shrink-0" />
                    <span>Voorstel op maat met docent & programma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-foreground/50 shrink-0" />
                    <span>Flexibele planning: op locatie of online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-foreground/50 shrink-0" />
                    <span>Voor groepen van 5 tot 50 deelnemers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="border-2 border-dashed border-foreground/30 p-8 text-center bg-foreground/[0.02]">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Aanvraag verzonden
                  </h2>
                  <p className="text-sm text-foreground/70 mb-6">
                    Bedankt! We nemen binnen 2 werkdagen contact met je op.
                  </p>
                  <a
                    href="/agenda"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
                  >
                    Terug naar agenda
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="border-2 border-dashed border-foreground/30 p-6 bg-foreground/[0.02]">
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-4">
                    [ aanvraagformulier ]
                  </p>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      {/* Row: voornaam + naam */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="voornaam"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-foreground/50">
                                Voornaam *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Voornaam"
                                  className="border-dashed border-foreground/30 bg-background focus-visible:ring-foreground/30 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="naam"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-foreground/50">
                                Naam *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Achternaam"
                                  className="border-dashed border-foreground/30 bg-background focus-visible:ring-foreground/30 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Row: email + mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-foreground/50">
                                E-mail *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="naam@bedrijf.be"
                                  className="border-dashed border-foreground/30 bg-background focus-visible:ring-foreground/30 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="mobile"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] uppercase tracking-widest text-foreground/50">
                                Mobile *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+32 470 00 00 00"
                                  className="border-dashed border-foreground/30 bg-background focus-visible:ring-foreground/30 text-sm"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Bedrijf */}
                      <FormField
                        control={form.control}
                        name="bedrijf"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest text-foreground/50">
                              Bedrijf *
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Naam van je organisatie"
                                className="border-dashed border-foreground/30 bg-background focus-visible:ring-foreground/30 text-sm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Opleidingsnood */}
                      <FormField
                        control={form.control}
                        name="opleidingsnood"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] uppercase tracking-widest text-foreground/50">
                              Omschrijf uw opleidingsnood *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Welke vaardigheden wil je ontwikkelen? Voor welk team? Hoeveel deelnemers? Online of op locatie?"
                                rows={5}
                                className="border-dashed border-foreground/30 bg-background focus-visible:ring-foreground/30 text-sm resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs uppercase tracking-widest font-semibold hover:bg-foreground/85 transition-colors"
                        >
                          Verstuur aanvraag
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
