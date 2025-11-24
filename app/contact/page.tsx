"use client";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form[0] as HTMLInputElement).value.trim();
  const email = (form[1] as HTMLInputElement).value.trim();
  const phone = (form[2] as HTMLInputElement).value.trim();
  const subject = (form[3] as HTMLInputElement).value.trim();
  const message = (form[4] as HTMLTextAreaElement).value.trim();

  if (!email) {
    alert("Le champ email est obligatoire.");
    return;
  }
  if (!message) {
    alert("Le champ message est obligatoire.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer un email valide.");
    return;
  }

  if (phone && !/^\+?\d{10,15}$/.test(phone)) {
    alert("Veuillez entrer un numéro de téléphone valide (10 à 15 chiffres).");
    return;
  }

  const formData = { name, email, phone, subject, message };
   try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message);
    form.reset();
  } catch (err) {
    alert("Erreur lors de l'envoi du formulaire.");
  }
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">

      <section
        className="relative w-full h-[45vh] flex justify-center items-center"
        style={{ backgroundImage: "url('/image-carnet.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 after:content-[''] after:block after:w-[130px] after:h-1 after:bg-gray-800 after:mt-3 after:mx-auto">Contact</h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
      </section>

      <section className="w-full bg-white py-20">
        <div className="max-w-2xl mx-auto px-4">

          <div className="bg-white [box-shadow:0_2px_14px_-3px_rgba(14,14,14,0.3)] rounded-2xl p-6 sm:p-10">
            
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">Me contacter</h2>
              <p className="text-[15px] text-center text-gray-700 leading-relaxed">Une question, un projet, un besoin de correction ?</p>
              <p className="text-[15px] text-center text-gray-700 leading-relaxed">Je serai ravie d’échanger avec vous.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 text-gray-900 mt-8">

              <div>
                <input
                  type='text'
                  placeholder='Nom'
                  className="w-full bg-gray-100 py-2.5 px-4 text-sm rounded-md border border-gray-200 
                           focus:bg-transparent focus:border-gray-800 outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type='email'
                  placeholder='Email'
                  className="w-full bg-gray-100 py-2.5 px-4 text-sm rounded-md border border-gray-200 
                           focus:bg-transparent focus:border-gray-800 outline-none transition-all"
                />
              </div>

              <div className="col-span-full">
                <input
                  type='text'
                  placeholder='Numéro de téléphone'
                  className="w-full bg-gray-100 py-2.5 px-4 text-sm rounded-md border border-gray-200 
                           focus:bg-transparent focus:border-gray-800 outline-none transition-all"
                />
              </div>

              <div className="col-span-full">
                <input
                  type='text'
                  placeholder='Sujet'
                  className="w-full bg-gray-100 py-2.5 px-4 text-sm rounded-md border border-gray-200 
                           focus:bg-transparent focus:border-gray-800 outline-none transition-all"
                />
              </div>

              <div className="col-span-full">
                <textarea
                  placeholder='Message'
                  rows={6}
                  className="w-full bg-gray-100 px-4 text-sm rounded-md pt-3 border border-gray-200 
                           focus:bg-transparent focus:border-gray-800 outline-none transition-all"
                ></textarea>
              </div>

              <div className="col-span-full">
                <button
                  type='submit'
                  className="text-gray-800 bg-gray-50 hover:bg-gray-150 hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 text-sm rounded-md font-medium px-4 py-2.5 
                             cursor-pointer w-full mt-2! transition"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
