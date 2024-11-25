from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Banco de dados simples de sintomas
sintomas = {
    ""
    "oi":"Olá, sou um Chat-Boat especializado em sintomas, para conseguir uma melhor avaliação escreva seus sintomas corretamente, para ser direcionando para um hospital de acordo!",
    "Olá":"Olá, sou um Chat-Boat especializado em sintomas, para conseguir uma melhor avaliação escreva seus sintomas corretamente,  para ser direcionando para um hospital de acordo!",
    "obrigado": "De nada, uma boa recuperação para você!",
    "obrigada": "De nada, uma boa recuperação para você!",
    "dor atrás dos olhos dor de cabeça forte náusea vômito fadiga cansaço febre":"Isso pode indicar sintomas de dengue, por favor procure um médico urgente para uma avaliação. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor de cabeça": "Possíveis causas incluem tensão, desidratação, enxaqueca ou sinusite. Tente descansar, beber água e, se persistir, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "febre": "Pode indicar infecção viral ou bacteriana. Mantenha-se hidratado, descanse e monitore a temperatura. Se ultrapassar 39°C ou durar mais de 3 dias, procure atendimento médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "tosse": "Pode ser devido a irritação na garganta, resfriado, gripe ou alergias. Beba líquidos quentes, use mel para acalmar a garganta. Se persistir por mais de 2 semanas, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor de garganta": "Geralmente causada por infecções virais. Faça gargarejo com água morna e sal, tome líquidos quentes. Se houver febre alta ou dificuldade para engolir, procure um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "coriza": "Comum em resfriados e alergias. Mantenha-se hidratado, use spray nasal salino e descanse. Se acompanhada de febre ou dor, pode ser sinusite. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "fadiga": "Pode ser causada por falta de sono, estresse, anemia ou depressão. Procure dormir melhor, fazer exercícios leves e uma dieta equilibrada. Se persistir, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor nas costas": "Possíveis causas incluem má postura, esforço excessivo ou problemas na coluna. Aplique compressas quentes, faça alongamentos leves. Se a dor for intensa ou persistente, procure um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "náusea": "Pode ser causada por intoxicação alimentar, gravidez, ou problemas digestivos. Beba líquidos em pequenas quantidades, evite alimentos gordurosos. Se houver vômitos frequentes, procure atendimento médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor abdominal": "Pode indicar problemas digestivos, cólicas menstruais ou gases. Evite alimentos que causam desconforto, use compressas quentes. Se a dor for intensa ou acompanhada de febre, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "diarreia": "Geralmente causada por vírus, bactérias ou intolerância alimentar. Mantenha-se hidratado, evite laticínios e alimentos gordurosos. Se durar mais de 3 dias ou houver sangue nas fezes, procure um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "constipação": "Pode ser devido à dieta pobre em fibras ou desidratação. Aumente a ingestão de fibras e água, faça exercícios leves. Se persistir por mais de uma semana, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor no peito": "Pode ser causada por azia, ansiedade ou problemas cardíacos. Se a dor for intensa, acompanhada de falta de ar ou irradiação para o braço, procure atendimento de emergência imediatamente. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "falta de ar": "Pode ser causada por ansiedade, asma ou problemas cardíacos. Se for súbita ou acompanhada de dor no peito, procure atendimento de emergência. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "tontura": "Pode ser devido a desidratação, queda de pressão ou problemas no ouvido interno. Sente-se ou deite-se, beba água. Se persistir ou for acompanhada de outros sintomas, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor nas articulações": "Pode indicar artrite, lesão ou excesso de exercícios. Aplique compressas frias ou quentes, faça repouso. Se a dor for intensa ou acompanhada de inchaço, procure um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "insônia": "Pode ser causada por estresse, ansiedade ou hábitos inadequados de sono. Estabeleça uma rotina de sono, evite cafeína à noite. Se persistir, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "ansiedade": "Sintomas incluem preocupação excessiva, inquietação e tensão muscular. Pratique técnicas de relaxamento, exercícios e considere buscar ajuda psicológica se interferir na sua vida diária. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "depressão": "Sintomas incluem tristeza persistente, perda de interesse em atividades e alterações no sono. É importante buscar ajuda profissional para avaliação e tratamento adequado. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "erupções cutâneas": "Podem ser causadas por alergias, infecções ou condições dermatológicas. Evite coçar, use hidratante. Se houver febre ou a erupção se espalhar rapidamente, procure um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor de dente": "Pode indicar cárie, infecção ou problema na gengiva. Enxágue com água morna e sal, use analgésico. Agende uma consulta com um dentista o mais rápido possível. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "cólica": "As cólicas podem ser causadas por cólicas menstruais, problemas digestivos ou infecções. Para aliviar, tente usar uma compressa quente no abdômen, beber água e descansar. Se a dor for intensa ou persistir por vários dias, consulte um médico. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dengue": "Dengue é uma infecção viral transmitida por mosquitos, com sintomas como febre alta, dores no corpo, dor atrás dos olhos, náusea e manchas vermelhas na pele. É importante se manter hidratado e buscar atendimento médico imediatamente, pois a dengue pode evoluir para formas mais graves, como a dengue hemorrágica. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "covid-19": "COVID-19 é uma infecção viral que pode causar febre, tosse, falta de ar, cansaço, perda de paladar ou olfato, e dores no corpo. Em alguns casos, pode haver sintomas gastrointestinais como diarreia. Se você apresentar esses sintomas, é importante se isolar, monitorar os sinais, e procurar atendimento médico, especialmente se houver dificuldade para respirar ou dor no peito.Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234.",
    "dor de ouvido": "Pode ser devido à infecção no ouvido, acúmulo de cera, mudanças na pressão do ar ou irritação devido a alergias ou sinusite. Se persistir, procure um médico para melhor avaliação. Nossa unidade de pronto atendimento localizada na Rua Treze de Maio Nº 1234."
    "Hemorroida": "As hemorroidas podem causar desconforto, dor, coceira e até sangramento ao evacuar. São veias dilatadas na região anal que podem surgir devido ao esforço durante as evacuações, constipação ou permanência prolongada sentado. Para aliviar os sintomas, evite alimentos picantes, mantenha-se hidratado e faça uma dieta rica em fibras. Se os sintomas persistirem ou piorarem, é importante procurar um médico para avaliação adequada. Nossa unidade de pronto atendimento está localizada na Rua Treze de Maio Nº 1234."
}


@app.route('/chat', methods=['POST'])
def chat():
    entrada_usuario = request.json['mensagem'].lower()
    
    for sintoma, resposta in sintomas.items():
        if sintoma in entrada_usuario:
            return jsonify({"resposta": resposta})
    
    return jsonify({"resposta": "Não tenho certeza sobre esse sintoma. Por favor, consulte um profissional de saúde para obter orientações médicas precisas."})

if __name__ == '__main__':
    app.run(debug=True)
