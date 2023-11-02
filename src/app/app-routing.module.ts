import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactPageComponent } from "src/app/contact-page/contact-page.component";
import { EditListingPageComponent } from "src/app/edit-listing-page/edit-listing-page.component";
import { ListingDetailPageComponent } from "src/app/listing-detail-page/listing-detail-page.component";
import { ListingsPageComponent } from "src/app/listings-page/listings-page.component";
import { MyListingsPageComponent } from "src/app/my-listings-page/my-listings-page.component";
import { NewListingPageComponent } from "src/app/new-listing-page/new-listing-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/listings", pathMatch: "full" },
  { path: "listings", component: ListingsPageComponent, pathMatch: "full" },
  { path: "listings/:id", component: ListingDetailPageComponent },
  { path: "contact/:id", component: ContactPageComponent },
  { path: "edit-listing/:id", component: EditListingPageComponent },
  { path: "my-listings", component: MyListingsPageComponent },
  { path: "new-listing", component: NewListingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
