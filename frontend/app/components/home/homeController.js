angular.module("home", [])
    .controller("homeCtrl", function ($scope) {
        
        $scope.page = {
          title: 'CodeX',
          subtitle: 'Empresa Jr. de Computação UFCG'
        };

        $scope.main = {
            subtitle: "CodeX",
            title: "A Empresa",
            content: "A CodeX tem a finalidade de aplicar os conhecimentos \
                obtidos no campo teórico pelos estudantes de graduação do curso \
                de Ciência da Computação da Universidade Federal de Campina Grande, em \
                soluções digitais através da elaboração e execução de projetos comerciais, \
                web e mobile para micro e pequenas empresas.",
            button: "Mais sobre nós!",
        };

        $scope.secondary = {
            subtitle: "text",
            title: "Lorem Ipsum",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac purus metus. Cras id imperdiet magna. Integer viverra vitae \
                orci sit amet sagittis. Maecenas vulputate urna a iaculis iaculis. Nullam fringilla venenatis \
                mi, ut porta nunc euismod quis. Pellentesque mi libero, pretium eu sem eu, rhoncus ultrices tortor. \
                Suspendisse at placerat magna, commodo posuere diam. Cras neque massa, accumsan nec semper at, \
                blandit sit amet massa."   
        };

        $scope.classes = {
            subtitle: "section-heading-upper",
            title: "section-heading-lower"
        }
        
        $scope.copyright = "Copyright \u00A9 CodeX 2018"
    });