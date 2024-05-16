// Aqui está o script JavaScript para popular as cidades e bairros
var cidadesPorEstado = {
    // Lista de cidades do Acre...
    "AC": ["Acrelândia", "Assis Brasil", "Brasiléia", "Bujari", "Capixaba", "Cruzeiro do Sul", "Epitaciolândia", "Feijó", "Jordão", "Mâncio Lima", "Manoel Urbano", "Marechal Thaumaturgo", "Plácido de Castro", "Porto Acre", "Porto Walter", "Rio Branco", "Rodrigues Alves", "Santa Rosa do Purus", "Sena Madureira", "Senador Guiomard", "Tarauacá", "Xapuri"],
    // Lista de cidades de Alagoas...
    "AL": ["Água Branca", "Anadia", "Arapiraca", "Atalaia", "Barra de Santo Antônio", "Barra de São Miguel", "Batalha", "Belém", "Belo Monte", "Boca da Mata", "Branquinha", "Cacimbinhas", "Cajueiro", "Campestre", "Campo Alegre", "Campo Grande", "Canapi", "Capela", "Carneiros", "Chã Preta", "Coité do Nóia", "Colônia Leopoldina", "Coqueiro Seco", "Coruripe", "Craíbas", "Delmiro Gouveia", "Dois Riachos", "Estrela de Alagoas", "Feira Grande", "Feliz Deserto", "Flexeiras", "Girau do Ponciano", "Ibateguara", "Igaci", "Igreja Nova", "Inhapi", "Jacaré dos Homens", "Jacuípe", "Japaratinga", "Jaramataia", "Jequiá da Praia", "Joaquim Gomes", "Jundiá", "Junqueiro", "Lagoa da Canoa", "Limoeiro de Anadia", "Maceió", "Major Isidoro", "Mar Vermelho", "Maragogi", "Maravilha", "Marechal Deodoro", "Maribondo", "Mata Grande", "Matriz de Camaragibe", "Messias", "Minador do Negrão", "Monteirópolis", "Murici", "Novo Lino", "Olho d'Água das Flores", "Olho d'Água do Casado", "Olho d'Água Grande", "Olivença", "Ouro Branco", "Palestina", "Palmeira dos Índios", "Pão de Açúcar", "Pariconha", "Paripueira", "Passo de Camaragibe", "Paulo Jacinto", "Penedo", "Piaçabuçu", "Pilar", "Pindoba", "Piranhas", "Poço das Trincheiras", "Porto Calvo", "Porto de Pedras", "Porto Real do Colégio", "Quebrangulo", "Rio Largo", "Roteiro", "Santa Luzia do Norte", "Santana do Ipanema", "Santana do Mundaú", "São Brás", "São José da Laje", "São José da Tapera", "São Luís do Quitunde", "São Miguel dos Campos", "São Miguel dos Milagres", "São Sebastião", "Satuba", "Senador Rui Palmeira", "Tanque d'Arca", "Taquarana", "Teotônio Vilela", "Traipu", "União dos Palmares", "Viçosa"],
    // E assim por diante...
};

// Função para popular o select de cidades de acordo com o estado selecionado
function popularCidades() {
    var estado = document.getElementById("estado").value;
    var selectCidade = document.getElementById("cidade");
    selectCidade.innerHTML = "";

    var cidades = cidadesPorEstado[estado];
    for (var i = 0; i < cidades.length; i++) {
        var option = document.createElement("option");
        option.text = cidades[i];
        option.value = cidades[i];
        selectCidade.add(option);
    }
}

// Função para popular o select de bairros de acordo com a cidade selecionada
function popularBairros() {
    var cidade = document.getElementById("cidade").value;
    var selectBairro = document.getElementById("bairro");
    selectBairro.innerHTML = "";

    // Aqui você pode incluir um JSON ou uma lógica para obter os bairros da cidade selecionada
    // Por simplicidade, vou adicionar alguns bairros genéricos
    var bairros = ["Bairro 1", "Bairro 2", "Bairro 3"];
    for (var i = 0; i < bairros.length; i++) {
        var option = document.createElement("option");
        option.text = bairros[i];
        option.value = bairros[i];
        selectBairro.add(option);
    }
}
