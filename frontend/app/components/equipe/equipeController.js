angular.module("equipe", [])
    .controller("equipeCtrl", function($scope) {
        
        $scope.page = {
            title: 'CodeX',
            subtitle: 'Empresa Jr. de Computação UFCG'
        };

        $scope.header = {
            title: "Nossa Equipe",
            subtitle: "Um time preparado para desenvolver a sua solução"
        }

        $scope.classes = {
            subtitle: "section-heading-upper",
            title: "section-heading-lower"
        }

        $scope.cards = [
            {
                nome: "Héricles Emanuel", 
                cargo: "Web Developer",
                descricao: "Lorem ipsum dolor sit amet, consectetur \
                    adipisicing elit, sed do eiusmod tempor incididunt \
                    ut labore et.",
                image: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/L84AAOSw30JbApWU/$_12.JPG?set_id=880000500F"  
            },
            {
                nome: "Evelinne de Carvalho", 
                cargo: "Web Developer",
                descricao: "Lorem ipsum dolor sit amet, consectetur \
                    adipisicing elit, sed do eiusmod tempor incididunt \
                    ut labore et.",
                image: "https://cdn.awsli.com.br/600x1000/163/163225/produto/16984140/6b374ee25e.jpg"  
            }
        ]
    });