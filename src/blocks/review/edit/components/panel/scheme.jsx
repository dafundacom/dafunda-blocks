/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */

import { useState } from "react";

const { __ } = wp.i18n; // Import __() from wp.i18n

const {
  ToolbarGroup,
  ToolbarButton,
  Button,
  ButtonGroup,
  FormToggle,
  PanelBody,
  PanelRow,
  RangeControl,
  RadioControl,
  SelectControl,
  TextControl,
  DatePicker,
  ToggleControl,
} = wp.components;
const { BlockControls, InspectorControls, PanelColorSettings, URLInput } =
  wp.blockEditor || wp.editor;

const removeFromArray = (arr, removedElems) =>
  arr.filter((a) =>
    Array.isArray(removedElems) ? !removedElems.includes(a) : a !== removedElems
  );

export default function Scheme(props) {
  const {
    attributes: {
      authorName,
      // itemName,
      // itemPage,
      itemType,
      itemSubtype,
      itemSubsubtype,
      // description,
      // imgPosition,
      // imgID,
      // imgAlt,
      // imgURL,
      // valueType,
      // items,
      // parts,
      // starCount,
      // useSummary,
      // summaryTitle,
      // summaryDescription,
      // callToActionText,
      // callToActionFontSize,
      // callToActionURL,
      // callToActionBackColor,
      // callToActionBorderColor,
      // callToActionForeColor,
      // inactiveStarColor,
      // activeStarColor,
      // starOutlineColor,
      // activePercentBarColor,
      // percentBarColor,
      // titleAlign,
      // authorAlign,
      // descriptionAlign,
      // enableCTA,
      // ctaNoFollow,
      // ctaOpenInNewTab,
      // ctaIsSponsored,
      // ctaAlignment,
      enableReviewSchema,
      // enableImage,
      // enableDescription,
      // imageSize,
      brand,
      sku,
      identifier,
      identifierType,
      offerType,
      offerCurrency,
      offerStatus,
      offerCount,
      offerExpiry,
      offerPrice,
      offerHighPrice,
      offerLowPrice,
      cuisines,
      appCategory,
      operatingSystem,
      provider,
      isbn,
      bookAuthorName,
      reviewPublisher,
      reviewPublicationDate,
      usePhysicalAddress,
      address,
      addressName,
      priceRange,
      phoneNumber,
      eventStartDate,
      eventEndDate,
      eventPage,
      organizer,
      performer,
      videoUploadDate,
      videoURL,
    },
    setAttributes,
  } = props;

  const subtype = [
    "Book",
    "Course",
    "CreativeWorkSeason",
    "CreativeWorkSeries",
    "Episode",
    "Event",
    "Game",
    "LocalBusiness",
    // "MediaObject",
    "Movie",
    "MusicPlaylist",
    "MusicRecording",
    "Organization",
    "Product",
    "SoftwareApplication",
  ];

  const subtypeCategories = {
    Book: ["Audiobook"],
    Event: [
      "BusinessEvent",
      "ChildrensEvent",
      "ComedyEvent",
      "CourseInstance",
      "DanceEvent",
      "DeliveryEvent",
      "EducationEvent",
      "EventSeries", //pending
      "Festival",
      "FoodEvent",
      "Hackathon", //pending
      "LiteraryEvent",
      "MusicEvent",
      "PublicationEvent",
      "SaleEvent",
      "ScreeningEvent",
      "SocialEvent",
      "SportsEvent",
      "TheaterEvent",
      "VisualArtsEvent",
    ],
    Game: ["VideoGame"],
    LocalBusiness: [
      "AnimalShelter",
      "ArchiveOrganization", //pending
      "AutomotiveBusiness",
      "ChildCare",
      "Dentist",
      "DryCleaningOrLaundry",
      "EmergencyService",
      "EmploymentAgency",
      "EntertainmentBusiness",
      "FinancialService",
      "FoodEstablishment",
      "GovernmentOffice",
      "HealthAndBeautyBusiness",
      "HomeAndConstructionBusiness",
      "InternetCafe",
      "LegalService",
      "Library",
      "LodgingBusiness",
      "MedicalBusiness",
      "ProfessionalService",
      "RadioStation",
      "RealEstateAgent",
      "RecyclingCenter",
      "SelfStorage",
      "ShoppingCenter",
      "SportsActivityLocation",
      "TelevisionStation",
      "TouristInformationCenter",
      "TravelAgency",
    ],
    MediaObject: [
      "3DModel", //pending
      "AudioObject",
      "DataDownload",
      "ImageObject",
      "LegislationObject", //pending
      "MusicVideoObject",
      //   "VideoObject",
    ],
    MusicPlaylist: ["MusicAlbum", "MusicRelease"],
    Organization: [
      "Airline",
      "Consortium", //pending
      "Corporation",
      "EducationalOrganization",
      "FundingScheme", //pending
      "GovernmentOrganization",
      "LibrarySystem", //pending
      "MedicalOrganization",
      "NewsMediaOrganization", //pending
      "NGO",
      "PerformingGroup",
      "Project", //pending
      "SportsOrganization",
      "WorkersUnion",
    ],
    Product: [
      "IndividualProduct",
      "ProductCollection",
      "ProductGroup",
      "ProductModel",
      "SomeProducts",
      "Vehicle",
    ],
    SoftwareApplication: ["MobileApplication", "VideoGame", "WebApplication"],
  };

  const subsubtypes = {
    PublicationEvent: ["BroadcastEvent", "OnDemandEvent"],
    EducationalOrganization: [
      "CollegeOrUniversity",
      "ElementarySchool",
      "HighSchool",
      "MiddleSchool",
      "Preschool",
      "School",
    ],
    MedicalOrganization: [
      "Dentist",
      "DiagnosticLab",
      "Hospital",
      "MedicalClinic",
      "Pharmacy",
      "Physician",
      "VeterinaryCare",
    ],
    PerformingGroup: ["DanceGroup", "MusicGroup", "TheaterGroup"],
    Project: ["FundingAgency", "ResearchProject"],
    SportsOrganization: ["SportsTeam"],
    AutomotiveBusiness: [
      "AutoBodyShop",
      "AutoDealer",
      "AutoPartsStore",
      "AutoRental",
      "AutoRepair",
      "AutoWash",
      "GasStation",
      "MotorcycleDealer",
      "MotorcycleRepair",
    ],
    EmergencyService: ["FireStation", "Hospital", "PoliceStation"],
    EntertainmentBusiness: [
      "AdultEntertainment",
      "AmusementPark",
      "ArtGallery",
      "Casino",
      "ComedyClub",
      "MovieTheater",
      "NightClub",
    ],
    FinancialService: [
      "AccountingService",
      "AutomatedTeller",
      "BankOrCreditUnion",
      "InsuranceAgency",
    ],
    FoodEstablishment: [
      "Bakery",
      "BarOrPub",
      "Brewery",
      "CafeOrCoffeeShop",
      "Distillery",
      "FastFoodRestaurant",
      "IceCreamShop",
      "Restaurant",
      "Winery",
    ],
    GovernmentOffice: ["PostOffice"],
    HealthAndBeautyBusiness: [
      "BeautySalon",
      "DaySpa",
      "HairSalon",
      "HealthClub",
      "NailSalon",
      "TattooParlor",
    ],
    HomeAndConstructionBusiness: [
      "Electrician",
      "GeneralContractor",
      "HVACBusiness",
      "HousePainter",
      "Locksmith",
      "MovingCompany",
      "Plumber",
      "RoofingContractor",
    ],
    LegalService: ["Attorney", "Notary"],
    LodgingBusiness: [
      "BedAndBreakfast",
      "Campground",
      "Hostel",
      "Hotel",
      "Motel",
      "Resort",
    ],
    MedicalBusiness: [
      //only subtypes that support reviews are included
      "Dentist",
      "MedicalClinic",
      "Optician",
      "Pharmacy",
      "Physician",
    ],
    SportsActivityLocation: [
      "BowlingAlley",
      "ExerciseGym",
      "GolfCourse",
      "HealthClub",
      "PublicSwimmingPool",
      "SkiResort",
      "SportsClub",
      "StadiumOrArena",
      "TennisComplex",
    ],
    Store: [
      "AutoPartsStore",
      "BikeStore",
      "BookStore",
      "ClothingStore",
      "ComputerStore",
      "ConvenienceStore",
      "DepartmentStore",
      "ElectronicsStore",
      "Florist",
      "FurnitureStore",
      "GardenStore",
      "GroceryStore",
      "HardwareStore",
      "HobbyShop",
      "HomeGoodsStore",
      "JewelryStore",
      "LiquorStore",
      "MensClothingStore",
      "MobilePhoneStore",
      "MovieRentalStore",
      "MusicStore",
      "OfficeEquipmentStore",
      "OutletStore",
      "PawnShop",
      "PetStore",
      "ShoeStore",
      "SportingGoodsStore",
      "TireShop",
      "ToyStore",
      "WholesaleStore",
    ],
  };

  const offerAttributes = [
    "offerType",
    "offerStatus",
    "offerHighPrice",
    "offerLowPrice",
    "offerCount",
    "offerPrice",
    "offerCurrency",
    "offerExpiry",
  ];

  let unusedDefaults = [
    "bookAuthorName",
    "isbn",
    "provider",
    ...offerAttributes,
    "startDate",
    "endDate",
    "usePhysicalAddress",
    "addressName",
    "address",
    "eventPage",
    "itemPage",
    "organizer",
    "performer",
    "brand",
    "sku",
    "identifierType",
    "identifier",
    "cuisines",
    "phoneNumber",
    "priceRange",
    "appCategory",
    "operatingSystem",
    "videoUploadDate",
    "videoURL",
  ];

  const addressInput = (
    <TextControl
      label={__("Address")}
      value={address}
      onChange={(address) => setAttributes({ address })}
    />
  );

  const [last_cuisine, set_last_cuisine] = useState("");
  const [event_date, set_event_date] = useState(false);

  const cuisineInput = (
    <>
      <p>{__("Serves cuisine")}</p>
      <ul className="review_cuisine_list">
        {cuisines.length > 0 ? (
          cuisines.map((c, i) => (
            <li key={i}>
              {c}
              <span
                className="dashicons dashicons-dismiss"
                onClick={() =>
                  setAttributes({
                    cuisines: [
                      ...cuisines.slice(0, i),
                      ...cuisines.slice(i + 1),
                    ],
                  })
                }
              />
            </li>
          ))
        ) : (
          <span>{__("Cuisine list empty")}</span>
        )}
      </ul>
      <label>{__("Add a cuisine to the list")}</label>
      <input
        type="text"
        value={last_cuisine}
        onKeyUp={(e) => {
          if (e.key === "Enter" && e.target.value !== "") {
            setAttributes({ cuisines: [...cuisines, e.target.value] });
            set_last_cuisine("");
          }
        }}
        onChange={(e) => {
          if (e.target.value.includes(",")) {
            const latestItemArray = e.target.value.split(",");

            if (latestItemArray[0] !== "") {
              setAttributes({
                cuisines: [
                  ...(cuisines.length > 1 || cuisines[0] !== ""
                    ? cuisines
                    : []),
                  ...latestItemArray.slice(0, latestItemArray.length - 1),
                ],
              });
              set_last_cuisine(latestItemArray[latestItemArray.length - 1]);
            }
          } else {
            set_last_cuisine(e.target.value);
          }
        }}
        onBlur={() => {
          if (last_cuisine !== "") {
            setAttributes({
              cuisines: [
                ...(cuisines.length > 1 || cuisines[0] !== "" ? cuisines : []),
                last_cuisine,
              ],
            });
            set_last_cuisine("");
          }
        }}
      />
    </>
  );

  let itemTypeExtras;
  switch (itemType) {
    default:
      //there's nothing to add
      break;
    case "Book":
      itemTypeExtras = (
        <>
          <TextControl
            label={__("ISBN")}
            value={isbn}
            onChange={(isbn) => setAttributes({ isbn })}
          />
          <TextControl
            label={__("Book author name")}
            value={bookAuthorName}
            onChange={(bookAuthorName) => setAttributes({ bookAuthorName })}
          />
          {/* {itemURLInput} */}
        </>
      );
      unusedDefaults = removeFromArray(unusedDefaults, [
        "isbn",
        "bookAuthorName",
        "itemPage",
      ]);
      break;
    case "Course":
      itemTypeExtras = (
        <TextControl
          label={__("Provider")}
          value={provider}
          onChange={(provider) => setAttributes({ provider })}
        />
      );
      unusedDefaults = removeFromArray(unusedDefaults, "provider");
      break;
    case "Event":
      itemTypeExtras = (
        <>
          <h3>{__("Event start date")}</h3>
          <DatePicker
            currentDate={eventStartDate * 1000}
            onChange={(newDate) => {
              const newDateVal = Math.floor(Date.parse(newDate) / 1000);
              setAttributes({ eventStartDate: newDateVal });
              if (event_date && eventEndDate <= newDateVal) {
                setAttributes({ eventEndDate: 86400 + newDateVal });
              }
            }}
          />
          <label htmlFor="review-event-date-toggle">
            {__("Use event end date")}
          </label>
          <FormToggle
            id="review-event-date-toggle"
            label={__("Set event end date")}
            checked={event_date}
            onChange={() => {
              set_event_date(!event_date);
              setAttributes({
                eventEndDate: event_date ? 0 : 86400 + eventStartDate,
              });
            }}
          />
          {event_date &&
            ((<h3>{__("Event end date")}</h3>),
            (
              <DatePicker
                currentDate={eventEndDate * 1000}
                onChange={(newDate) =>
                  setAttributes({
                    eventEndDate: Math.floor(Date.parse(newDate) / 1000),
                  })
                }
              />
            ))}
          <PanelBody title={__("Event venue")} initialOpen>
            <Button
              icon="admin-home"
              isPrimary={usePhysicalAddress}
              onClick={() => setAttributes({ usePhysicalAddress: true })}
              showTooltip={true}
              label={"Use physical location"}
            />
            <Button
              icon="admin-site-alt3"
              isPrimary={!usePhysicalAddress}
              onClick={() => setAttributes({ usePhysicalAddress: false })}
              showTooltip={true}
              label={"Use virtual location"}
            />
            {usePhysicalAddress ? (
              <>
                <TextControl
                  label={__("Address Name")}
                  value={addressName}
                  onChange={(addressName) => setAttributes({ addressName })}
                />
                {addressInput}
              </>
            ) : (
              <div id="review_event_page_input">
                <URLInput
                  label={__("Event Page")}
                  autoFocus={false}
                  value={eventPage}
                  onChange={(eventPage) => setAttributes({ eventPage })}
                />
              </div>
            )}
          </PanelBody>
          <TextControl
            label={__("Performer")}
            value={performer}
            onChange={(performer) => setAttributes({ performer })}
          />
          <TextControl
            label={__("Organizer")}
            value={organizer}
            onChange={(organizer) => setAttributes({ organizer })}
          />
        </>
      );
      unusedDefaults = removeFromArray(unusedDefaults, [
        ...offerAttributes,
        "startDate",
        "endDate",
        "usePhysicalAddress",
        "addressName",
        "address",
        "eventPage",
        "organizer",
        "performer",
      ]);
      break;
    case "Product":
      itemTypeExtras = (
        <>
          <TextControl
            label={__("Brand")}
            value={brand}
            onChange={(brand) => setAttributes({ brand })}
          />
          <TextControl
            label={__("SKU")}
            value={sku}
            onChange={(sku) => setAttributes({ sku })}
          />
          <TextControl
            label={__("Identifier")}
            value={identifier}
            onChange={(identifier) => setAttributes({ identifier })}
          />
          <SelectControl
            label={__("Identifier type")}
            value={identifierType}
            options={[
              "nsn",
              "mpn",
              "gtin8",
              "gtin12",
              "gtin13",
              "gtin14",
              "gtin",
            ].map((a) => ({ label: __(a.toUpperCase()), value: a }))}
            onChange={(identifierType) => setAttributes({ identifierType })}
          />
        </>
      );
      unusedDefaults = removeFromArray(unusedDefaults, [
        "brand",
        "sku",
        "identifiertype",
        "identifier",
        ...offerAttributes,
      ]);

      break;
    case "LocalBusiness":
      itemTypeExtras = (
        <>
          {itemSubtype === "FoodEstablishment" &&
            itemSubsubtype !== "Distillery" &&
            cuisineInput}
          {!(
            ["AnimalShelter", "ArchiveOrganization"].includes(itemSubtype) ||
            ["FireStation", "PoliceStation"].includes(itemSubsubtype)
          ) && (
            <TextControl
              label={__("Price Range")}
              value={priceRange}
              onChange={(priceRange) => setAttributes({ priceRange })}
            />
          )}
          {addressInput}
          <TextControl
            label={__("Telephone Number")}
            type="tel"
            value={phoneNumber}
            onChange={(phoneNumber) => setAttributes({ phoneNumber })}
          />
          {/* {itemURLInput} */}
        </>
      );
      if (
        itemSubtype === "FoodEstablishment" &&
        itemSubsubtype !== "Distillery"
      ) {
        unusedDefaults = removeFromArray(unusedDefaults, "cuisines");
      }
      unusedDefaults = removeFromArray(unusedDefaults, [
        "address",
        "itemPage",
        "phoneNumber",
        "priceRange",
      ]);
      break;
    case "Movie":
      //   itemTypeExtras = itemURLInput;
      unusedDefaults = removeFromArray(unusedDefaults, ["itemPage"]);
      break;
    case "Organization":
      itemTypeExtras = (
        <>
          {(itemSubsubtype === "Hospital" ||
            subsubtypes.MedicalBusiness.includes(itemSubsubtype)) && (
            <TextControl
              label={__("Price Range")}
              value={priceRange}
              onChange={(priceRange) => setAttributes({ priceRange })}
            />
          )}
          {addressInput}
          <TextControl
            label={__("Telephone Number")}
            type="tel"
            value={phoneNumber}
            onChange={(phoneNumber) => setAttributes({ phoneNumber })}
          />
        </>
      );
      unusedDefaults = removeFromArray(unusedDefaults, [
        "address",
        "phoneNumber",
        "priceRange",
      ]);
      break;
    case "SoftwareApplication":
      itemTypeExtras = (
        <>
          <TextControl
            label={__("Application Category")}
            value={appCategory}
            onChange={(appCategory) => setAttributes({ appCategory })}
          />
          <TextControl
            label={__("Operating System")}
            value={operatingSystem}
            onChange={(operatingSystem) => setAttributes({ operatingSystem })}
          />
        </>
      );
      unusedDefaults = removeFromArray(unusedDefaults, [
        ...offerAttributes,
        "appCategory",
        "operatingSystem",
      ]);
      break;
    case "MediaObject":
      if (itemSubtype === "VideoObject") {
        itemTypeExtras = (
          <>
            <h3>{__("Video upload date")}</h3>,
            <DatePicker
              currentDate={videoUploadDate * 1000}
              onChange={(newDate) =>
                setAttributes({
                  videoUploadDate: Math.floor(Date.parse(newDate) / 1000),
                })
              }
            />
            <div id="review_video_url_input">
              <URLInput
                label={__("Video URL")}
                autoFocus={false}
                value={videoURL}
                onChange={(videoURL) => setAttributes({ videoURL })}
              />
            </div>
          </>
        );
        unusedDefaults = removeFromArray(unusedDefaults, [
          "videoUploadDate",
          "videoURL",
        ]);
      }
      break;
  }

  return (
    <div>
      <PanelBody title={__("Review schema")} initialOpen={true}>
        <PanelRow>
          <label htmlFor="review-schema-toggle">
            {__("Enable review schema")}
          </label>
          <FormToggle
            id="review-schema-toggle"
            label={__("Enable review schema")}
            checked={enableReviewSchema}
            onChange={() => {
              let newAttributes = {
                enableReviewSchema: !enableReviewSchema,
              };
              //   if (enableReviewSchema) {
              //     newAttributes = Object.assign(newAttributes, {
              //       enableImage: false,
              //       enableDescription: false,
              //     });
              //   }
              setAttributes(newAttributes);
            }}
          />
        </PanelRow>
        {/* <PanelRow>
          <label htmlFor="review-summary-toggle">
            {__("Use review summary")}
          </label>
          <FormToggle
            id="review-summary-toggle"
            label={__("Use review summary")}
            checked={useSummary}
            onChange={() => setAttributes({ useSummary: !useSummary })}
          />
        </PanelRow> */}
        {enableReviewSchema && (
          <>
            <SelectControl
              label={__("Item type")}
              value={itemType}
              onChange={(itemType) => {
                setAttributes({ itemType });
                // if (itemType === "Movie") {
                //   setAttributes({ enableImage: true });
                // }
                // if (itemType === "Course") {
                //   setAttributes({ enableDescription: true });
                // }
                if (
                  !subtypeCategories.hasOwnProperty(itemType) ||
                  !subtypeCategories[itemType].includes(itemSubtype)
                ) {
                  setAttributes({ itemSubtype: "", itemSubsubtype: "" });
                }
              }}
              options={subtype.map((a) => ({ label: a, value: a }))}
            />
            {subtypeCategories.hasOwnProperty(itemType) && (
              <SelectControl
                label={__("Item subtype")}
                value={itemSubtype}
                onChange={(itemSubtype) => {
                  setAttributes({ itemSubtype });
                  //   if (itemSubtype === "VideoObject") {
                  //     setAttributes({ enableImage: true });
                  //   }
                  if (
                    !subsubtypes.hasOwnProperty(itemSubtype) ||
                    !subsubtypes[itemSubtype].includes(itemSubsubtype)
                  ) {
                    setAttributes({ itemSubsubtype: "" });
                  }
                }}
                options={["", ...subtypeCategories[itemType]].map((a) => ({
                  label: a,
                  value: a,
                }))}
              />
            )}
            {subsubtypes.hasOwnProperty(itemSubtype) && (
              <SelectControl
                label={__("Item subsubtype")}
                value={itemSubsubtype}
                onChange={(itemSubsubtype) => setAttributes({ itemSubsubtype })}
                options={["", ...subsubtypes[itemSubtype]].map((a) => ({
                  label: a,
                  value: a,
                }))}
              />
            )}
          </>
        )}
        <>
          {/* {!(
            enableReviewSchema &&
            (itemType === "Movie" || itemSubtype === "VideoObject")
          ) && (
            //images are required for these item types and optional for the rest
            <PanelRow>
              <label htmlFor="review-image-toggle">
                {__("Enable review image")}
              </label>
              <FormToggle
                id="review-image-toggle"
                label={__("Enable review image")}
                checked={enableImage}
                onChange={() => setAttributes({ enableImage: !enableImage })}
              />
            </PanelRow>
          )} */}
          {/* {enableImage && (
            <>
              <PanelRow>
                <label>{__("Image size")}</label>
                <input
                  type="number"
                  value={imageSize}
                  onChange={(e) => {
                    setAttributes({ imageSize: e.target.value });
                  }}
                />
              </PanelRow>
              <PanelRow>
                <label>{__("Image position")}</label>
                <SelectControl
                  value={imgPosition}
                  onChange={(imgPosition) => setAttributes({ imgPosition })}
                  options={[
                    "left",
                    "right",
                    ...(enableDescription ? ["top", "bottom"] : []),
                  ].map((a) => ({
                    label: __(a),
                    value: a,
                  }))}
                />
              </PanelRow>
            </>
          )} */}
          {/* {(!enableReviewSchema || itemType !== "Course") && (
            <PanelRow>
              <label htmlFor="review-description-toggle">
                {__("Enable review description")}
              </label>
              <FormToggle
                id="review-description-toggle"
                label={__("Enable review description")}
                checked={enableDescription}
                onChange={() => {
                  setAttributes({ enableDescription: !enableDescription });
                  if (
                    !enableDescription &&
                    ["top", "bottom"].includes(imgPosition)
                  ) {
                    setAttributes({ imgPosition: "right" });
                  }
                }}
              />
            </PanelRow>
          )} */}
        </>
        {enableReviewSchema && (
          <>
            {itemTypeExtras}
            <TextControl
              label={__("Review publisher")}
              value={reviewPublisher}
              onChange={(reviewPublisher) => setAttributes({ reviewPublisher })}
            />
            <p>{__("Review publication date")}</p>
            <DatePicker
              currentDate={reviewPublicationDate * 1000}
              onChange={(newDate) =>
                setAttributes({
                  reviewPublicationDate: Math.floor(Date.parse(newDate) / 1000),
                })
              }
            />
            {["Event", "Product", "SoftwareApplication"].includes(itemType) && (
              <PanelBody title={__("Offer")}>
                <SelectControl
                  label={__("Offer Type")}
                  value={offerType}
                  options={["Offer", "Aggregate Offer"].map((a) => ({
                    label: __(a),
                    value: a.replace(" ", ""),
                  }))}
                  onChange={(offerType) => setAttributes({ offerType })}
                />
                <TextControl
                  label={__("Offer Currency")}
                  value={offerCurrency}
                  onChange={(offerCurrency) => setAttributes({ offerCurrency })}
                />
                {offerType === "Offer" ? (
                  <>
                    <TextControl
                      label={__("Offer Price")}
                      value={offerPrice}
                      type="number"
                      onChange={(val) => {
                        if (!isNaN(Number(val))) {
                          setAttributes({ offerPrice: Number(val) });
                        }
                      }}
                    />
                    <SelectControl
                      label={__("Offer Status")}
                      value={offerStatus}
                      options={[
                        "Discontinued",
                        "In Stock",
                        "In Store Only",
                        "Limited Availability",
                        "Online Only",
                        "Out Of Stock",
                        "Pre Order",
                        "Pre Sale",
                        "Sold Out",
                      ].map((a) => ({
                        label: __(a),
                        value: a.replace(" ", ""),
                      }))}
                      onChange={(offerStatus) => setAttributes({ offerStatus })}
                    />
                    <ToggleControl
                      label={__("Offer expiration")}
                      checked={offerExpiry > 0}
                      onChange={() =>
                        setAttributes({
                          offerExpiry: offerExpiry
                            ? 0
                            : 60 * (10080 + Math.ceil(Date.now() / 60000)), //default to one week from Date.now() when enabled
                        })
                      }
                    />
                    {offerExpiry > 0 && (
                      <DatePicker
                        currentDate={offerExpiry * 1000}
                        onChange={(newDate) =>
                          setAttributes({
                            offerExpiry: Math.floor(Date.parse(newDate) / 1000),
                          })
                        }
                      />
                    )}
                  </>
                ) : (
                  <>
                    <TextControl
                      label={__("Offer Count")}
                      value={offerCount}
                      onChange={(val) =>
                        setAttributes({ offerCount: Number(val) })
                      }
                    />
                    <TextControl
                      label={__(`Lowest Available Price (${offerCurrency})`)}
                      value={offerLowPrice}
                      onChange={(val) => {
                        if (!isNaN(val)) {
                          setAttributes({ offerLowPrice: Number(val) });
                        }
                      }}
                    />
                    <TextControl
                      label={__(`Highest Available Price (${offerCurrency})`)}
                      value={offerHighPrice}
                      onChange={(val) => {
                        if (!isNaN(val)) {
                          setAttributes({ offerHighPrice: Number(val) });
                        }
                      }}
                    />
                  </>
                )}
              </PanelBody>
            )}
          </>
        )}
      </PanelBody>
    </div>
  );
}
