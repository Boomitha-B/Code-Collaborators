{
    "responseId": "384360dc-c8aa-4298-b151-a098f0fd6200-d673503e",
    "queryResult": {
      "queryText": "planfinder",
      "action": "input.welcome",
      "parameters": {},
      "allRequiredParamsPresent": true,
      "fulfillmentText": "Hello!! I am your PlanFinder. How can I assist you?",
      "fulfillmentMessages": [
        {
          "text": {
            "text": [
              "Hello!! I am your PlanFinder. How can I assist you?"
            ]
          }
        }
      ],
      "intent": {
        "name": "projects/planfinder-niad/agent/intents/3074d33d-83e7-450e-af9a-17625458ad86",
        "displayName": "Default Welcome Intent"
      },
      "intentDetectionConfidence": 0.70064396,
      "languageCode": "en"
    }
  }
  

{
  "responseId": "18d26a1b-a6c2-4862-be13-c8519a6a64ef-d673503e",
  "queryResult": {
    "queryText": "HEALTH POLICIES",
    "parameters": {
      "geo-state": ""
    },
    "allRequiredParamsPresent": true,
    "fulfillmentText": "Alright!! I can guide you with the health policies",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Alright!! I can guide you with the health policies"
          ]
        }
      }
    ],
    "outputContexts": [
      {
        "name": "projects/planfinder-niad/agent/sessions/22f9c117-6d4e-422e-c94c-852d5d97adbe/contexts/_system_counters_",
        "lifespanCount": 1,
        "parameters": {
          "no-match": 0,
          "geo-state.original": "",
          "geo-state": "",
          "no-input": 0
        }
      }
    ],
    "intent": {
      "name": "projects/planfinder-niad/agent/intents/ba50d1da-403a-46b0-86f6-b0d7d573c1a7",
      "displayName": "schemes"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  }
}


{
  "responseId": "f4225d6d-89a4-42fd-901f-c4b09fc537c7-d673503e",
  "queryResult": {
    "queryText": "children",
    "parameters": {
      "geo-state": "",
      "Get_Policy_Disease": "",
      "Get_Policy_Age": "Children"
    },
    "fulfillmentText": "What is the Get_Policy_Disease?",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            "What is the Get_Policy_Disease?"
          ]
        }
      }
    ],
    "outputContexts": [
      {
        "name": "projects/planfinder-niad/agent/sessions/22f9c117-6d4e-422e-c94c-852d5d97adbe/contexts/ba50d1da-403a-46b0-86f6-b0d7d573c1a7_id_dialog_context",
        "lifespanCount": 2,
        "parameters": {
          "Get_Policy_Age": "Children",
          "geo-state": "",
          "Get_Policy_Disease.original": "",
          "geo-state.original": "",
          "Get_Policy_Disease": "",
          "Get_Policy_Age.original": "children"
        }
      },
      {
        "name": "projects/planfinder-niad/agent/sessions/22f9c117-6d4e-422e-c94c-852d5d97adbe/contexts/schemes_dialog_context",
        "lifespanCount": 2,
        "parameters": {
          "geo-state": "",
          "Get_Policy_Disease.original": "",
          "Get_Policy_Age.original": "children",
          "Get_Policy_Age": "Children",
          "geo-state.original": "",
          "Get_Policy_Disease": ""
        }
      },
      {
        "name": "projects/planfinder-niad/agent/sessions/22f9c117-6d4e-422e-c94c-852d5d97adbe/contexts/schemes_dialog_params_get_policy_disease",
        "lifespanCount": 1,
        "parameters": {
          "Get_Policy_Disease": "",
          "Get_Policy_Age.original": "children",
          "geo-state": "",
          "Get_Policy_Age": "Children",
          "Get_Policy_Disease.original": "",
          "geo-state.original": ""
        }
      },
      {
        "name": "projects/planfinder-niad/agent/sessions/22f9c117-6d4e-422e-c94c-852d5d97adbe/contexts/_system_counters_",
        "lifespanCount": 1,
        "parameters": {
          "no-input": 0,
          "no-match": 0,
          "geo-state.original": "",
          "geo-state": "",
          "Get_Policy_Age": "Children",
          "Get_Policy_Age.original": "children",
          "Get_Policy_Disease": "",
          "Get_Policy_Disease.original": ""
        }
      }
    ],
    "intent": {
      "name": "projects/planfinder-niad/agent/intents/ba50d1da-403a-46b0-86f6-b0d7d573c1a7",
      "displayName": "schemes"
    },
    "intentDetectionConfidence": 1,
    "languageCode": "en"
  }
}


{
  "responseId": "b254cd9c-313e-472b-9ccc-d6e843e06de7-d673503e",
  "queryResult": {
    "queryText": "adults",
    "parameters": {
      "geo-state": "",
      "Get_Policy_Age": "30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65",
      "Get_Policy_Disease": "cancer",
      "Get_Policy_Category": "adults"
    },
    "allRequiredParamsPresent": true,
    "fulfillmentText": "Alright!! I can guide you with the health policies",
    "fulfillmentMessages": [
      {
        "text": {
          "text": [
            "Alright!! I can guide you with the health policies"
          ]
        }
      }
    ],
    "intent": {
      "name": "projects/planfinder-niad/agent/intents/ba50d1da-403a-46b0-86f6-b0d7d573c1a7",
      "displayName": "schemes",
      "endInteraction": true
    },
    "intentDetectionConfidence": 1,
    "diagnosticInfo": {
      "end_conversation": true
    },
    "languageCode": "en"
  }
}
