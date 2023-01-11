var data = {
    produtos_tech: [
        {
            product: "Landing Page",
            price: 75.00,
            details: `Landing Page para alavancar seus negócios` 
        },
        {
            product: "Sistema",
            price: 60.00,
            details: `Sistema de compras, registros, mensagens, chamados etc.`
        },
        {
            product: "App Windows",
            price: 120.00,
            details: `App nativo do Windows, pode ser como você quiser.`
        },
        {
            product: "Guxta Cloud",
            price: 200.00,
            details: `Sistema de armazenamento de arquivos offline`
        },
        {
            product: "Bot Telegram",
            price: 70.00,
            details: `Bot para atendimento online do Telegram`
        },
        {
            product: "Bot Discord",
            price: 15.00,
            details: `Bot para um servidor do Discord`
        }
    ],
    produtos_design: [
        {
            product: "Capa de vídeo YouTube",
            price: 20.00,
            details: `Capa de vídeo que atrai telespectadores para seu vídeo`
        },
        {
            product: "Capa de CD Digital",
            price: 50.00,
            details: `Capa para seu CD Digital, para colocar em plataformas digitais`
        },
        // {
        //     product: "Logotipo",
        //     price: 20.00,
        //     details: `Logotipo para seu negócio`
        // }, 
        {
            product: "Pacote Redes Sociais",
            price: 30.00,
            details: `Pasta de imagens e vídeos para suas redes sociais`
        }
    ]
}

const Header = Vue.extend({
    template: `
    <div id="header">
        <h1>GUXTAVO. Shop</h1>
        <nav>
            <ul>
                <li><a href="/index.html#habilidades">Habilidades</a></li>
                <li><a href="/index.html#projetos">Projetos</a></li>
                <li><a href="#">Loja</a></li>
            </ul>
        </nav>
    </div>
    `
})

const ListProductsTech = Vue.extend({
    data: function() {
        return data;
    },
    template: `
        <div class="list-products">
            <div class='product' v-for="products in produtos_tech">
            <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Produto Tech</div>
            <div class="card-body">
              <h5 class="card-title">{{ products.product }}</h5>
              <p class="card-text">{{ products.details }}</p>
              <h5 class="card-title">R$\t{{ products.price }}</h5>
            </div>
          </div>
              </div>
            </div>
        </div>
    `
})

const ListProductsDesign = Vue.extend({
    data: function() {
        return data;
    },
    template: `
        <div class="list-products">
            <div class='product' v-for="products in produtos_design">
            <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">Produto Design</div>
            <div class="card-body">
              <h5 class="card-title">{{ products.product }}</h5>
              <p class="card-text">{{ products.details }}</p>
              <h5 class="card-title">R$\t{{ products.price }}</h5>
            </div>
          </div>
              </div>
            </div>
        </div>
    `
})

// Registrando os componentes

Vue.component('header-component', Header)
Vue.component('list-products-tech', ListProductsTech)
Vue.component('list-products-design', ListProductsDesign)

new Vue({
	el: '#app'
})