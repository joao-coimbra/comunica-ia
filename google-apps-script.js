/**
 * ComunicaIA - Google Apps Script
 * 
 * Script de automação que captura dados do Google Forms e
 * envia em tempo real para o Make.com via webhook
 * 
 * @author João Henrique Benatti Coimbra
 * @version 1.0
 */

/**
 * Função acionada automaticamente ao envio do formulário
 * Trigger: onFormSubmit
 */
function onFormSubmit(e) {
  try {
    // Captura os dados enviados pelo Forms
    const sheet = e.source.getActiveSheet();
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const row = e.range.getRow();
    const values = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Monta o objeto com cabeçalho -> valor
    const payload = {};
    headers.forEach((header, i) => {
      payload[header] = values[i];
    });

    // URL do Webhook do Make.com
    // IMPORTANTE: Substitua pela sua URL de webhook
    const webhookUrl = "https://hook.eu1.make.com/sua-url-unica-aqui"; // insira aqui a sua URL de webhook

    // Envia os dados para o Make.com
    UrlFetchApp.fetch(webhookUrl, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });

    Logger.log("Dados enviados com sucesso para o Make.com");

  } catch (err) {
    Logger.log("Erro ao enviar para Make: " + err);
  }
}

/**
 * Configuração do Trigger:
 * 
 * 1. Abra o editor de scripts da planilha (Extensões > Apps Script)
 * 2. Cole este código
 * 3. Vá em "Acionadores" (ícone de relógio na barra lateral)
 * 4. Clique em "+ Adicionar acionador"
 * 5. Configure:
 *    - Função: onFormSubmit
 *    - Origem do evento: Da planilha
 *    - Tipo de evento: Ao enviar formulário
 * 6. Salve
 * 
 * Pronto! Agora o script será executado automaticamente a cada envio do formulário.
 */

