import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

// إضافة دالة generateStaticParams لدعم التصدير الثابت
export function generateStaticParams() {
  // إنشاء مصفوفة بمعرفات السور المتاحة
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },
    { id: '18' },
    { id: '19' },
    { id: '20' },
  ]
}

// بيانات مؤقتة للسور
const surahsData = {
  "1": { id: 1, name: 'الفاتحة', arabicName: 'Al-Fatihah', versesCount: 7 },
  "2": { id: 2, name: 'البقرة', arabicName: 'Al-Baqarah', versesCount: 286 },
  "3": { id: 3, name: 'آل عمران', arabicName: 'Aal-Imran', versesCount: 200 },
}

// بيانات مؤقتة للآيات
const versesData = {
  "1": [
    { id: 1, text: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
    { id: 2, text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', translation: 'All praise is due to Allah, Lord of the worlds.' },
    { id: 3, text: 'الرَّحْمَٰنِ الرَّحِيمِ', translation: 'The Entirely Merciful, the Especially Merciful.' },
    { id: 4, text: 'مَالِكِ يَوْمِ الدِّينِ', translation: 'Sovereign of the Day of Recompense.' },
    { id: 5, text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', translation: 'It is You we worship and You we ask for help.' },
    { id: 6, text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', translation: 'Guide us to the straight path.' },
    { id: 7, text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.' },
  ]
}

export default function SurahDetail({ params }: { params: { id: string } }) {
  const surahId = params.id
  const surah = surahsData[surahId as keyof typeof surahsData] || null
  const verses = versesData[surahId as keyof typeof versesData] || []
  
  if (!surah) {
    return (
      <main className="flex min-h-screen flex-col items-center p-8 sm:p-24">
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">السورة غير موجودة</h1>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/surahs">العودة لقائمة السور</Link>
          </Button>
        </div>
      </main>
    )
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8 sm:p-24">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">سورة {surah.name}</h1>
          <p className="text-xl text-muted-foreground">{surah.arabicName} - عدد الآيات: {surah.versesCount}</p>
        </div>
        
        <div className="mb-6 flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/surahs">العودة لقائمة السور</Link>
          </Button>
          <Button asChild>
            <Link href={`/tafsir?surah=${surah.id}`}>عرض التفسير</Link>
          </Button>
        </div>
        
        <Card className="p-6">
          <div className="space-y-6">
            {verses.map((verse) => (
              <div key={verse.id} className="border-b pb-4 last:border-b-0">
                <p className="text-xl text-right mb-2 font-arabic">{verse.text} ﴿{verse.id}﴾</p>
                <p className="text-sm text-muted-foreground">{verse.translation}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}
