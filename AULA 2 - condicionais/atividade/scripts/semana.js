
       // Solicitar ao usuário um número de 1 a 7
        prompt("Digite um número de 1 a 7 para saber o dia da semana: ");
        numero = scanner.nextInt();

        // Verificar o número e exibir o dia correspondente
        switch (numero) {
            case "1":
                alert("1 = Segunda-feira");
                break
            case "2":
                ("2 = Terça-feira");
                break
            case "3":
                alert("3 = Quarta-feira");
                break
            case "4":
                alert("4 = Quinta-feira");
                break
            case "5":
                alert("5 = Sexta-feira");
                break
            case "6":
                alert("6 = Sábado");
                break
            case "7":
                alert("7 = Domingo");
                break
            default:
                alert("Número inválido! Por favor, insira um número de 1 a 7.");
                break
        }
        scanner.close();
