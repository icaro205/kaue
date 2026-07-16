<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botão com HTML, CSS e Script</title>

    <style>
        /* Centraliza o botão na tela */
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
            font-family: Arial, sans-serif;
        }

        /* Estilo visual do botão (CSS) */
        .botao-legal {
            background-color: #4CAF50;
            color: white;
            padding: 15px 32px;
            font-size: 18px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        /* Efeito de passar o mouse */
        .botao-legal:hover {
            background-color: #45a049;
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
        }
    </style>
</head>
<body>

    <!-- Estrutura do botão (HTML) -->
    <button class="botao-legal" onclick="executarAcao()">Clique Aqui</button>

    <!-- Lógica de programação (JavaScript) -->
    <script>
        function executarAcao() {
            // Abre uma janela de alerta no navegador
            alert("O botão foi clicado com sucesso!");
        }
    </script>

</body>
</html>
