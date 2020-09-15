"""
Lexbot Lambda handler.
"""
from urllib.request import Request, urlopen
import json

def getUrlsProduct(response):
    
    string = ""
    for product in response:
 
        string += str(product['link']) + "\n"
        
    return string
    
def search_product(product):
    
    request = Request('https://hiringcoders4.vtexcommercestable.com.br/api/catalog_system/pub/products/search/{}'.format(product))
    request.add_header('x-vtex-api-appkey', '')
    request.add_header('x-vtex-api-apptoken', '')
    response = json.loads(urlopen(request).read())
    
    UrlsProducts = getUrlsProduct(response)
    
    return  UrlsProducts


def lambda_handler(event, context):
    
    nameProduct = event['currentIntent']['slots']['nameProduct']
    
    string = search_product(nameProduct)
    
    response = {
        "dialogAction": {
            "type": "Close",
            "fulfillmentState": "Fulfilled",
            
            "message": {
                "contentType": "SSML",
                "content": string
            },
        }
    }
    
    return response
