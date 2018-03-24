# Creazione dell'agente su dialogflow

Nel primo passo del tutorial configureremo l'agente Dialogflow per poter gestire
richieste del tipo:

> accendi il LED

Oppure:

> spegni il motore

## Accesso a Dialogflow

Visita il sito https://console.dialogflow.com/ ed esegui il login con l'email
con cui ti è stato dato accesso.

Troverai il progetto `actions-on-google-gruppo-XYZ`, dove `XYZ` è il nome del
tuo gruppo.

Aprendo il progetto, ti si presenterà l'interfaccia principale di Dialogflow:

![](../01-dialogflow/01-create-intent.png)

In questo primo passo non dovrai scrivere neanche una riga di codice, in quanto
l'intera configurazione è gestibile tramite interfaccia visuale.

## Creazione primo Intent

Un Intent, in Dialogflow, è un punto di ingresso per il nostro Agente.
Procediamo a crearne uno, utilizzando il pulsante "Create Intent" in alto a
destra.

Diamo un nome al nostro Intent. Come primo esempio, possiamo usare "Accendi LED".
Chiaramente, questo sarà l'Intent che gestirà il comando per accendere il LED.

![](../01-dialogflow/02-name-intent.png)

Sei libero di dare il nome che vuoi all'Intent, ma accertati che sia un nome
identificativo per l'operazione che l'Intent dovrà eseguire.

## Aggiunta frasi di esempio

Espandendo la sezione "Training phrases", possiamo inserire le frasi che
invocheranno l'Intent, ad esempio:

> accendi il LED

oppure:

> accendi la luce

Puoi aggiungere qualsiasi frase desideri, purché sia semanticamente compatibile
con l'Intent che stiamo configurando 😉.

![](../01-dialogflow/03-add-training-phrases.png)

Il sistema alla base di Dialogflow apprenderà dalle frasi di esempio che hai
aggiunto, e potrà rispondere anche a richieste leggermente diverse, ma con
stesso significato, ad esempio:

> puoi accendere il led?

## Abilitazione del fulfillment

Di default, ogni Intent può rispondere con una frase a caso, fra quelle definite
nella sezione "Responses". Quello che ci serve, invece, è eseguire un'operazione
remota, e solo in seguito confermare all'utente che l'azione è stata eseguita
con successo (o con fallimento).

Ci serve implementare, quindi, un minimo di logica per:
1) riconoscere l'Intent lanciato
2) processare il comando
3) rispondere all'utente

Tale processo è chiamato, su Dialogflow, "fulfillment".

Per l'Intent creato, espandere la sezione "Fulfillment" e selezionare l'opzione
"Enable webhook call for this intent".

![](../01-dialogflow/04-enable-fulfillment.png)

Salva l'Intent appena creato dal pulsante in alto a destra.

## Creazione altri Intent

Torna alla schermata principale degli Intent, e procedi a creare altri 3 Intent,
configurati in maniera simile a quello appena dimostrato:

* Spegni LED
* Accendi motore
* Spegni motore

La configurazione per ognuno di questi Intent è identica, a parte il nome
dell'azione e le frasi di addestramento, che ovviamente devono essere diverse
per poter gestire diversi comandi.

Al termine della configurazione, dovresti avere la seguente lista di Intent:

![](../01-dialogflow/05-end.png)

## Prossimo passo

Congratulazioni!

Hai completato il primo passo del tutorial!
Procedi al [prossimo passo](02-fulfillment.md) per configurare il fulfillment
con (poco) codice Javascript.
