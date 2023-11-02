import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { fakeMyListings } from "src/app/fake-data";
import { Listing } from "src/app/types";

@Component({
  selector: "app-edit-listing-page",
  templateUrl: "./edit-listing-page.component.html",
  styleUrls: ["./edit-listing-page.component.css"],
})
export class EditListingPageComponent implements OnInit {
  listing: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeMyListings.find((listing) => listing.id === id);
  }

  onSubmit(): void {
    alert("Saving changes to the listing...");
    this.router.navigateByUrl("/my-listings");
  }
}
