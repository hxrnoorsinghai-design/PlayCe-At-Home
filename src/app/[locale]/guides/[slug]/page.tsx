import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { guides } from "@/content/guides";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isEn = locale === "en";

  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const Icon = guide.icon;

  return (
    <div className="overflow-hidden bg-warm-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end -mt-14">
        <div className="absolute inset-0">
          <Image
            src={guide.image}
            alt={isEn ? guide.titleEn : guide.titleEs}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-playceInk/90 via-playceInk/40 to-transparent" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-16">
          <ScrollReveal variant="fadeUp">
            <Link href={"/guides" as any} className="inline-block mb-8">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-playceInk backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {isEn ? "Back to Guides" : "Volver a Guías"}
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 bg-${guide.color}`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <span className={`text-sm font-bold uppercase tracking-wider mb-2 block text-${guide.color}`}>
                  {isEn ? "Caregiver Guide" : "Guía para Cuidadores"}
                </span>
                <h1 className="text-fluid-4xl font-heading font-black text-white leading-tight">
                  {isEn ? guide.titleEn : guide.titleEs}
                </h1>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 -mt-8 relative z-20">
        <ScrollReveal>
          <div className="bg-white rounded-3xl shadow-playful p-8 md:p-12">
            <div className="prose prose-lg md:prose-xl prose-warm max-w-none
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-playceInk
                prose-h2:text-fluid-2xl prose-h2:mb-6 prose-h2:mt-10
                prose-h3:text-fluid-xl prose-h3:text-playceBlue prose-h3:mb-4
                prose-p:text-warm-500 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-warm-500 prose-li:mb-2
                prose-strong:text-playceInk
                prose-a:text-playceCoral hover:prose-a:text-playceOrange
            ">
              <ReactMarkdown>
                {isEn ? guide.contentEn : guide.contentEs}
              </ReactMarkdown>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
