<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App pedra papel ou tesoura</title>
    <style>
        h1{
            text-align: center;
        }
        .player-options,.enemy-opitions{
            width: 50%;
        }
        .player-options img, .enemy-opitions img{
            max-width: 200px;
            opacity: 0.3;
            cursor: pointer;
        }
        .align{
            display: flex;
        }
    </style>
</head>

<body>
    <h1>Pedra, papel ou tesousa!</h1>
    <h2 class="vencedor"></h2>
    <hr>
    <div class="align">
        <div class="player-options">
            <div>
                <!--opt é um elemento proprio do html????pesquisar sobre-->
                <img opt="pedra" src="/image/rock.png">
            </div>
            <div>
                <img opt="papel" src="/image/paper.png">
            </div>
            <div>
                <img opt="tesoura" src="/image/scisor.png">
            </div>
        </div>

        <div class="enemy-opitions">
            <div>
                <img opt="pedra" src="/image/rock.png">
            </div>
            <div>
                <img opt="papel" src="/image/paper.png">
            </div>
            <div>
                <img opt="tesoura" src="/image/scisor.png">
            </div>
        </div>
    </div>

    <script src="/jogo.js"></script>
</body>
</html>