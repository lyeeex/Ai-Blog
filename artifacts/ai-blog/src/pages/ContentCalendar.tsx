import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Badge } from "../components/ui/badge";

export default function ContentCalendar() {
  const ideas = [
    { id: 1, en: "Understanding NLP", ar: "فهم معالجة اللغات الطبيعية", keyword: "NLP", target: "Beginners", cat: "Tutorials" },
    { id: 2, en: "AI in Healthcare", ar: "الذكاء الاصطناعي في الرعاية الصحية", keyword: "AI healthcare", target: "Professionals", cat: "Opinion" },
    { id: 3, en: "Top GPT-4 Prompts", ar: "أفضل مطالبات GPT-4", keyword: "GPT-4 prompts", target: "Everyone", cat: "AI Tools" },
    { id: 4, en: "Ethics of AI", ar: "أخلاقيات الذكاء الاصطناعي", keyword: "AI ethics", target: "Researchers", cat: "Opinion" },
    { id: 5, en: "Building an AI Startup", ar: "بناء شركة ناشئة للذكاء الاصطناعي", keyword: "AI startup", target: "Founders", cat: "Tutorials" },
    { id: 6, en: "AI Image Generators Compared", ar: "مقارنة مولدات صور الذكاء الاصطناعي", keyword: "AI image generators", target: "Designers", cat: "AI Tools" },
    { id: 7, en: "The Future of Work", ar: "مستقبل العمل", keyword: "future of work", target: "Professionals", cat: "Opinion" },
    { id: 8, en: "Intro to Neural Networks", ar: "مقدمة للشبكات العصبية", keyword: "neural networks", target: "Developers", cat: "Tutorials" },
    { id: 9, en: "AI vs Human Creativity", ar: "الذكاء الاصطناعي مقابل الإبداع البشري", keyword: "AI creativity", target: "Artists", cat: "Opinion" },
    { id: 10, en: "Latest OpenAI Updates", ar: "أحدث تحديثات OpenAI", keyword: "OpenAI updates", target: "Enthusiasts", cat: "News" },
    { id: 11, en: "Using AI for SEO", ar: "استخدام الذكاء الاصطناعي في تحسين محركات البحث", keyword: "AI SEO", target: "Marketers", cat: "Tutorials" },
    { id: 12, en: "Local LLMs Guide", ar: "دليل النماذج اللغوية الكبيرة المحلية", keyword: "Local LLM", target: "Developers", cat: "Tutorials" },
    { id: 13, en: "AI Video Editing", ar: "تحرير الفيديو بالذكاء الاصطناعي", keyword: "AI video", target: "Creators", cat: "AI Tools" },
    { id: 14, en: "Python for ML", ar: "بايثون لتعلم الآلة", keyword: "Python ML", target: "Beginners", cat: "Tutorials" },
    { id: 15, en: "AI Regulations 2024", ar: "لوائح الذكاء الاصطناعي 2024", keyword: "AI regulations", target: "Professionals", cat: "News" },
    { id: 16, en: "Demystifying AI Terms", ar: "توضيح مصطلحات الذكاء الاصطناعي", keyword: "AI terminology", target: "Beginners", cat: "Tutorials" },
    { id: 17, en: "Best Free AI Tools", ar: "أفضل أدوات الذكاء الاصطناعي المجانية", keyword: "Free AI tools", target: "Everyone", cat: "AI Tools" },
    { id: 18, en: "AI in Education", ar: "الذكاء الاصطناعي في التعليم", keyword: "AI education", target: "Teachers", cat: "Opinion" },
    { id: 19, en: "Building Chatbots", ar: "بناء روبوتات الدردشة", keyword: "build chatbot", target: "Developers", cat: "Tutorials" },
    { id: 20, en: "Is AGI Near?", ar: "هل اقترب الذكاء الاصطناعي العام؟", keyword: "AGI", target: "Researchers", cat: "Opinion" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Content Calendar / تقويم المحتوى</h1>
      <div className="rounded-md border bg-card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Title (EN)</TableHead>
              <TableHead>Title (AR)</TableHead>
              <TableHead>Focus Keyword</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ideas.map((idea) => (
              <TableRow key={idea.id}>
                <TableCell className="font-medium">{idea.id}</TableCell>
                <TableCell>{idea.en}</TableCell>
                <TableCell className="font-sans" dir="rtl">{idea.ar}</TableCell>
                <TableCell className="text-muted-foreground">{idea.keyword}</TableCell>
                <TableCell>{idea.target}</TableCell>
                <TableCell>
                  <Badge variant="outline">{idea.cat}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
