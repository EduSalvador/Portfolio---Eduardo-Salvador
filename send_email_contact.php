<?php
// Verifique se o servidor recebeu uma requisição POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupere os dados do POST
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $message = $_POST['message'];
    
    // TODO: Valide e limpe os dados conforme necessário

    // Destinatário e assunto do e-mail
    $to = 'edusalvador69@gmail.com';
    $subject = 'Nova mensagem do formulário de contato - Portfólio Eduardo Salvador';

    // Conteúdo do e-mail
    $email_content = "Nome: $name\n";
    $email_content .= "E-mail: $email\n";
    $email_content .= "Contato: $contact\n";
    $email_content .= "Mensagem:\n$message\n";

    // Cabeçalhos do e-mail
    $headers = "From: $name <$email>";

    // Tente enviar o e-mail usando a função mail()
    if (mail($to, $subject, $email_content, $headers)) {
        echo 'Agradecemos pelo seu contato!';
    } else {
        echo 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
    }
} else {
    // Redirecione para a página do formulário se o método não for POST
    header('Location: index.html');
}
?>
