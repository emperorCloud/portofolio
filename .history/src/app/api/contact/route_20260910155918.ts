import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_PortfKEY);

// ⚠️ Tant que le domaine n'est pas vérifié dans Resend :
//   - le destinataire DOIT être l'adresse de votre compte Resend
//   - l'expéditeur DOIT être onboarding@resend.dev
const RECIPIENT_EMAIL = 'emperordev706@gmail.com';
const SENDER_EMAIL = 'Contact Portfolio <onboarding@resend.dev>';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Envoi du mail
    const { data, error } = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,          // ← adresse de votre compte Resend
      subject: `Nouveau message de ${name}`,
      replyTo: email,               // ← pour répondre au visiteur en 1 clic
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès !' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}