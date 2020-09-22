"""
Lexbot Lambda handler.
"""
from urllib.request import Request, urlopen
import json

def search_product(product):
    
    request = Request('https://hiringcoders4.vtexcommercestable.com.br/api/catalog_system/pub/products/search/{}'.format(product))
    request.add_header('x-vtex-api-appkey', '')
    request.add_header('x-vtex-api-apptoken', '')
    response = json.loads(urlopen(request).read())
    
    return response

def get_sku_information(productID):
    
    request = Request('https://hiringcoders4.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{}'.format(productID))
    request.add_header('x-vtex-api-appkey', '')
    request.add_header('x-vtex-api-apptoken', '')
    response = json.loads(urlopen(request).read())
    
    return response
    
def get_product_information(response):
    
    list_response = []
    
    for product in response:
        
        sku_information = get_sku_information(product["productId"])
        response_json =  {
                     "title":product["productName"],
                     "subTitle":product["brand"],
                     "imageUrl":sku_information["ImageUrl"],
                     "attachmentLinkUrl":sku_information["ImageUrl"],
                     "buttons":[ 
                         {
                            "text":"Ver",
                            "value":product["link"]
                         }
                      ]
                   }
        
        list_response.append(response_json)
        
    return list_response

def lambda_handler(event, context):
    
    Piece = event['currentIntent']['slots']['Piece']
    
    response = search_product(Piece)
    
    list_response = get_product_information(response)
    
    response =  {
        "dialogAction": {
            "type": "Close",
            "fulfillmentState": "Fulfilled",
            "message": {
              "contentType": "SSML",
              "content": "Message to convey to the user. For example, Thanks, your pizza has been ordered."
            },
           "responseCard": {
              "version": 1,
              "contentType": "application/vnd.amazonaws.card.generic",
              "genericAttachments": list_response
             }
          }
    }
    
    return response
    
    
    