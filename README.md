# 🤖 ComunicaIA

> **Seu copiloto de IA para comunicação corporativa inteligente**

Protótipo de assistente de inteligência artificial desenvolvido para otimizar processos de comunicação interna, automatizando a criação de e-mails, resumos de reunião, mensagens e avisos institucionais.

---

## 📋 Sobre o Projeto

O **ComunicaIA** utiliza IA Generativa (Google Gemini Pro) para automatizar a criação de textos corporativos, liberando a equipe de RH para atividades de maior valor estratégico. A solução foi desenvolvida no âmbito da disciplina de Fundamentos de IA com foco em IA Generativa da UniFECAF.

### 🎯 Objetivo

Resolver o gargalo operacional no setor de comunicação interna, onde a alta demanda por textos corporativos consome tempo produtivo da equipe, oferecendo uma solução de baixo custo, escalável e que mantém a qualidade e padronização da comunicação.

---

## ✨ Funcionalidades

- ✅ **Geração automática de e-mails corporativos**
- ✅ **Criação de resumos de reunião estruturados**
- ✅ **Mensagens para WhatsApp profissionais**
- ✅ **Avisos institucionais formatados**
- ✅ **Ajuste de tom de voz personalizado**
- ✅ **Processamento em tempo real**

---

## 🏗️ Arquitetura

```
Google Forms → Google Sheets → Google Apps Script → Make.com (Webhook) → Google Gemini API → Google Docs
```

### Fluxo de Funcionamento

1. **Entrada**: Colaborador preenche o Google Form com tópicos, tipo de texto e tom de voz
2. **Gatilho**: Script no Google Apps Script é acionado automaticamente via `onFormSubmit`
3. **Envio**: Dados são enviados em tempo real via webhook para o Make.com
4. **Processamento**: Make.com envia os dados para a API do Google Gemini Pro
5. **Saída**: Texto gerado é automaticamente criado em um Google Doc

---

## 🚀 Como Usar

### 1️⃣ Acesse o Formulário
[**📝 Google Form - ComunicaIA**](https://forms.gle/tZbUXXF3tqCX12Kz7)

### 2️⃣ Preencha os Campos
- **Tópicos Principais**: Descreva os pontos que deseja comunicar
- **Tipo de Texto**: Escolha entre E-mail, Resumo de Reunião, WhatsApp ou Aviso Institucional
- **Tom de Voz**: Selecione o tom desejado (formal, informal, motivacional, etc.)

### 3️⃣ Envie e Aguarde
Instantaneamente, um novo Google Doc será criado na pasta de resultados!

### 4️⃣ Acesse o Resultado
[**📁 Pasta de Resultados no Google Drive**](https://drive.google.com/drive/folders/1hM75UzJqbNK91cGovouubouJqzgwG4PB?usp=sharing)

---

## 🛠️ Tecnologias Utilizadas

- **Google Forms** - Interface de entrada de dados
- **Google Sheets** - Armazenamento de respostas
- **Google Apps Script** - Automação e webhook
- **Make.com** - Orquestração do workflow
- **Google Gemini Pro** - Modelo de IA Generativa (LLM)
- **Google Docs** - Saída formatada dos textos

---

## 📦 Recursos do Projeto

### 📄 Arquivos Principais

- [`google-apps-script.js`](./google-apps-script.js) - Código de automação
- [`prompt-gemini.md`](./prompt-gemini.md) - Prompt de IA Generativa otimizado
- [`blueprint-make.json`](https://drive.google.com/file/d/17n_W6wyQhLBShPXSWreUM4TTZSdp1OGS/view?usp=sharing) - Template do cenário Make.com

### 🎥 Demonstração

[**▶️ Vídeo de Pitch e Workflow**](#) *(em breve)*

---

## 💡 Benefícios

- ⚡ **Agilidade** na produção de conteúdo
- 📏 **Padronização** da comunicação corporativa
- 🎯 **Redução de carga operacional** sobre a equipe de RH
- ✨ **Melhoria da qualidade** geral dos textos
- 💰 **Baixo custo** de implementação
- 📈 **Escalabilidade** para múltiplas solicitações simultâneas

---

## 🎓 Contexto Acadêmico

**Instituição**: UNIVERSIDADE UNIFECAF  
**Curso**: Tecnologia em Inteligência Artificial e Automação Digital  
**Disciplina**: Fundamentos de IA com foco em IA Generativa  
**Aluno**: João Henrique Benatti Coimbra  
**Ano**: 2025

---

## ⚠️ Considerações Éticas e de Segurança

- 🔒 **Proteção de dados sensíveis** em conformidade com a LGPD
- ⚖️ **Monitoramento de vieses** no texto gerado pela IA
- 👤 **Responsabilidade humana** final pelo conteúdo aprovado
- 🚫 **Não inserir informações confidenciais** no formulário

---

## 🚧 Desafios e Limitações

- A qualidade da saída é proporcional à qualidade dos tópicos fornecidos
- Necessidade de revisão humana final para validação
- Adaptação dos colaboradores ao novo fluxo de trabalho

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos.

---

## 👤 Autor

**João Henrique Benatti Coimbra**

📍 Bauru/SP - Brasil

---

## 📚 Referências

- [Google AI Studio](https://aistudio.google.com/)
- [Make Help Center](https://make.com/en/help)
- [OpenAI API Documentation](https://platform.openai.com/docs)

---

<div align="center">
  
**Desenvolvido com 💙 utilizando IA Generativa**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>

