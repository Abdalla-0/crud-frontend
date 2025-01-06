export default function handler(req, res) {
    if (req.method === 'POST') {
        // استقبل البيانات القادمة في الطلب
        const postItem = req.body;

        // من الممكن تخزين البيانات في قاعدة بيانات هنا إذا كنت تحتاج ذلك
        console.log('Received Post:', postItem);

        // إرسال استجابة إلى العميل
        res.status(200).json({ message: 'Post received successfully', postItem });
    } else {
        // إذا كان الطلب ليس POST
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}
