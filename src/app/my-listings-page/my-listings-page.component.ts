import { Component, OnInit } from "@angular/core";
import { fakeMyListings } from "src/app/fake-data";
import { Listing } from "src/app/types";

@Component({
  selector: "app-my-listings-page",
  templateUrl: "./my-listings-page.component.html",
  styleUrls: ["./my-listings-page.component.css"],
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}`);
  }
}
