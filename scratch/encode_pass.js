const password = "7[[ثمخحشفثق[[7";
const encoded = encodeURIComponent(password);
console.log(`postgresql://postgres:${encoded}@db.lpvtggsvttmiuelofevi.supabase.co:5432/postgres`);
