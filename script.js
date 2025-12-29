// ننتظر تحميل الصفحة بالكامل قبل تشغيل الكود
document.addEventListener('DOMContentLoaded', function() {
    
    // تعريف العناصر
    const generateBtn = document.getElementById('generateBtn');
    const userNameInput = document.getElementById('userName');
    const resultArea = document.getElementById('resultArea');
    const abjadCodeTextarea = document.getElementById('abjadCode');

    // إضافة مستمع للحدث عند الضغط على الزر
    generateBtn.addEventListener('click', generateCode);

    // دالة توليد الكود
    function generateCode() {
        const name = userNameInput.value.trim();
        
        if (name === "") {
            alert("الرجاء كتابة الاسم أولاً");
            return;
        }

        // بناء نص الكود بلغة أبجد
        const code = `متغير مقطع رسالة = "نورتنا يا ${name} ونشوفك المره القادمة"؛\nاكتب(رسالة)؛`;
        
        // عرض النتيجة
        abjadCodeTextarea.value = code;
        resultArea.style.display = "block";
    }
});
