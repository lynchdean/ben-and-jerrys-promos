import sys

import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient


def get_soup(url):
    r = requests.get(url)
    return BeautifulSoup(r.text, 'lxml')


def update_supervalu(kws, collection):
    soup = get_soup(
        "https://shop.supervalu.ie/shopping/search/allaisles?q=Ben%20%20Jerrys%20Ice%20Cream%20465%20ml&page=1")
    search_all = soup.find("div", id="search-all-aisles-listings-view")
    items = search_all.findAll("div", "col-xs-6")
    products = []
    for item in items:
        name = str(item.find("h4").text).strip()
        if all(x in name for x in kws):
            saving = item.find("div", class_="product-details-promotion-name").text
            if not saving.isspace():
                lifetime = " ".join(item.find("div", class_="product-details-promotion-lifetime").text.split())
                product = {"name": name,
                           "saving": saving.strip(),
                           "lifetime": lifetime,
                           "link": item.find("a")['href']}
                products.append(product)
    collection.delete_many({})
    collection.insert_many(products)
    print("Updated SuperValu collection in MongoDB.")


def update_tesco(kws, collection):
    soup = get_soup(
        "https://www.tesco.ie/groceries/product/search/default.aspx?searchBox=ben&originalSearchTerm=freetext&Nao=0")
    product_list = soup.find("ul", class_="products")
    items = product_list.findAll("li")
    products = []
    for item in items:
        if all(x in item.text for x in kws):
            promo = item.find("div", class_="promo")
            if promo:
                heading = item.find("h3")
                split = " ".join((str(promo.text).replace('\r\n ', '')).split()).split("valid")
                product = {"name": heading.text,
                           "saving": split[0],
                           "lifetime": "Valid" + split[1],
                           "link": "https://www.tesco.ie" + heading.find("a")['href']}
                products.append(product)
    collection.delete_many({})
    collection.insert_many(products)
    print("Updated Tesco collection in MongoDB.")


def get_database(name, user, pw, cluster):
    CONNECTION_STRING = f'mongodb+srv://{user}:{pw}@{cluster}.mongodb.net/Shops'
    client = MongoClient(CONNECTION_STRING)
    return client[name]


if __name__ == '__main__':
    kws = ["Ben", "Jerry", "465"]

    db = get_database('Shops', sys.argv[1], sys.argv[2], sys.argv[3])

    update_tesco(kws, db["Tesco"])
    update_supervalu(kws, db["SuperValu"])
    # TODO Add Dunnes
    print("Done.")
