Explicação dos Testes:
Testar Animal Inválido:

Verifica se o método analisaRecintos retorna o erro correto quando o animal fornecido não é válido.
Verifica que recintosViaveis está indefinido ou falso quando o animal é inválido.

Testar Quantidade Inválida:

Verifica se o método retorna o erro correto quando a quantidade fornecida é inválida (por exemplo, 0 macacos).
Testar Recintos Não Disponíveis:

Verifica se o método retorna "Não há recinto viável" quando não há espaço suficiente para acomodar os animais, como no caso de 10 macacos.

Verifica se o método encontra corretamente o recinto adequado para 1 crocodilo. No caso, espera-se que seja o "Recinto 4", com espaço livre de 5 e um total de 8.

Verifica se o método encontra todos os recintos viáveis para 2 macacos. O resultado esperado é que 3 recintos sejam viáveis, e eles são retornados corretamente em ordem com o espaço livre e total indicado.
