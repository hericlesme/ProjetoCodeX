angular.module("portfolio", [])
    .controller("portfolioCtrl", function ($scope) {
        
        $scope.page = {
            title: 'CodeX',
            subtitle: 'Empresa Jr. de Computação UFCG'
        };

        $scope.header = {
            title: "Nosso Portfolio",
            subtitle: "Acompanhe as soluções desenvolvidas pela nossa equipe"
        }

        $scope.classes = {
            subtitle: "section-heading-upper",
            title: "section-heading-lower"
        }

        $scope.cards = [
            {
                nome: "Produto 1", 
                site: "http://sitedoproduto1.com",
                descricao: "Lorem ipsum dolor sit amet, consectetur \
                    adipisicing elit, sed do eiusmod tempor incididunt \
                    ut labore et.",
                image: "https://mestredoadwords.com.br/wp-content/uploads/2016/12/vender-produtos.png"  
            },
            {
                nome: "Produto 2", 
                site: "http://sitedoproduto2.com",
                descricao: "Lorem ipsum dolor sit amet, consectetur \
                    adipisicing elit, sed do eiusmod tempor incididunt \
                    ut labore et.",
                image: "https://image.dhgate.com/0x0/f2/albu/g5/M01/98/E1/rBVaI1jCGfyAQ1eSAABuzuzKv9w821.jpg"  
            }
        ]

    });