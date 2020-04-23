package main

import(

	"fmt"
	"net/http"
	"encoding/json"
)

type Item struct {

	IPSKU	string `json:"IP SKU"`
	TD	    string `json:"Technical Description"`
	CD  	string `json:"Customer Description"`
	Sup	    string `json:"Supplier (Main)"`
	SupPN	string `json:"Supplier Part Number"`
	SubA	string `json:"Belongs to Sub-Assemblies"`
	ChildA	string `json:"Children of Sub-Assemblies"`
}

var items []Item

func getItemHandler(w http.ResponseWriter, r *http.Request){

	itemListBytes, err := json.Marshal(items)

	if err != nil {

		fmt.Println(fmt.Errorf("Error: %v", err))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Write(itemListBytes)
}

/*
func createItemHandler(w http.ResponseWriter, r *http.Request){

	item := Item{}

	err := r.ParseForm()

	if err != nil {

		fmt.Println(fmt.Errorf("Error: %v", err))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	item.Species = r.Form.Get("species")
	bird.Description = r.Form.Get("description")

	birds = append(birds, bird)

	http.Redirect(w, r, "/assets/", http.StatusFound)
}

*/
