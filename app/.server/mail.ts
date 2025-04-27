import { EmailMessage } from "cloudflare:email";
import { Mailbox, createMimeMessage } from "mimetext";
import { renderToStaticMarkup } from "react-dom/server";

const address = "contact@zli.works";

export const sendMail = async (
  env: CloudflareEnvironment,
  email: string,
  name: string,

  content: React.ReactNode,
) => {
  const contentString = renderToStaticMarkup(content);

  const msg = createMimeMessage();
  msg.setSender({ name: "zli.works", addr: address });
  msg.setRecipient(env.MAIL_ADDRESS);
  msg.setSubject("zli.works お問い合わせフォーム");
  msg.addMessage({
    contentType: "text/html",
    data: contentString,
  });
  msg.setHeader("Reply-To", new Mailbox({ name, addr: email }));

  const message = new EmailMessage(address, env.MAIL_ADDRESS, msg.asRaw());

  await env.MAIL.send(message);
};
