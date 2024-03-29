/* eslint-disable no-prototype-builtins */
import { registerBlockType } from "@wordpress/blocks";
import { withSelect } from "@wordpress/data";
import {
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
} from "@wordpress/components";

import {
  BlockControls,
  InspectorControls,
  PanelColorSettings,
  URLInput,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { withState, compose } from "@wordpress/compose";

import config from "./config.mjs";

// import Edit from "./edit/edit";
import Edit from "./edit/edit";
import Icon from "./icon";

export const removeFromArray = (arr, removedElems) =>
  arr.filter((a) =>
    Array.isArray(removedElems) ? !removedElems.includes(a) : a !== removedElems
  );

const { attributes } = config;

registerBlockType(config.name, {
  ...config,
  icon: Icon,
  edit: compose([
    withState({
      editable: "",
      editedStar: 0,
      lastCuisine: "",
      setEventEndDate: false,
      offerPriceRaw: "0",
      offerHighPriceRaw: "0",
      offerLowPriceRaw: "0",
      isLoaded: false,
      setCTAFontSize: false,
    }),
    withSelect((select, ownProps) => {
      const { getBlock, getClientIdsWithDescendants } =
        select("core/block-editor") || select("core/editor");

      return {
        block: getBlock(ownProps.clientId),
        getBlock,
        getClientIdsWithDescendants,
      };
    }),
  ])((props) => {
    const {
      attributes: {
        blockID,
        authorName,
        itemName,
        itemPage,
        itemType,
        itemSubtype,
        itemSubsubtype,
        description,
        imgPosition,
        imgID,
        imgAlt,
        imgURL,
        valueType,
        items,
        parts,
        starCount,
        useSummary,
        summaryTitle,
        summaryDescription,
        callToActionText,
        callToActionFontSize,
        callToActionURL,
        callToActionBackColor,
        callToActionBorderColor,
        callToActionForeColor,
        inactiveStarColor,
        activeStarColor,
        starOutlineColor,
        activePercentBarColor,
        percentBarColor,
        titleAlign,
        authorAlign,
        descriptionAlign,
        enableCTA,
        ctaNoFollow,
        ctaOpenInNewTab,
        ctaIsSponsored,
        ctaAlignment,
        enableReviewSchema,
        enableImage,
        enableDescription,
        imageSize,
        brand,
        sku,
        identifier,
        identifierType,
        offerType,
        offerCurrency,
        offerStatus,
        offerCount,
        offerExpiry,
        cuisines,
        appCategory,
        operatingSystem,
        provider,
        isbn,
        bookAuthorName,
        reviewPublisher,
        reviewPublicationDate,
        address,
        addressName,
        priceRange,
        phoneNumber,
        eventStartDate,
        eventEndDate,
        usePhysicalAddress,
        eventPage,
        organizer,
        performer,
        videoUploadDate,
        videoURL,
      },
      setAttributes,
      isSelected,
      editable,
      editedStar,
      lastCuisine,
      offerPriceRaw,
      offerHighPriceRaw,
      offerLowPriceRaw,
      isLoaded,
      setCTAFontSize,
      setEventEndDate,
      setState,
      block,
      getBlock,
      getClientIdsWithDescendants,
    } = props;

    const initialAttributes = {};

    if (blockID === "") {
      Object.assign(initialAttributes, {
        blockID: block.clientId,
        starOutlineColor: "#f7b708",
        activeStarColor: "#f7b708",
      });
    } else {
      if (
        getClientIdsWithDescendants().some(
          (ID) =>
            "blockID" in getBlock(ID).attributes &&
            getBlock(ID).attributes.blockID === blockID
        )
      ) {
        Object.assign(initialAttributes, { blockID: block.clientId });
      }
      if (starOutlineColor === "") {
        Object.assign(initialAttributes, { starOutlineColor: "#000000" });
      }
      if (activeStarColor === "") {
        Object.assign(initialAttributes, { activeStarColor: "#eeee00" });
      }
    }

    setAttributes(initialAttributes);

    const setAlignment = (target, value) => {
      switch (target) {
        case "reviewTitle":
          setAttributes({ titleAlign: value });
          break;
        case "reviewAuthor":
          setAttributes({ authorAlign: value });
          break;
        case "reviewItemDescription":
          setAttributes({ descriptionAlign: value });
          break;
        default:
          break;
      }
    };

    const getCurrentAlignment = (target) => {
      switch (target) {
        case "reviewTitle":
          return titleAlign;
        case "reviewAuthor":
          return authorAlign;
        case "reviewItemDescription":
          return descriptionAlign;
        default:
          break;
      }
    };

    if (
      items &&
      items !== JSON.stringify(parts) &&
      parts.length === 1 &&
      parts[0].label === "" &&
      parts[0].value === 0
    ) {
      setAttributes({
        parts: JSON.parse(items),
        items: '[{"label":"","value":0}]',
      });
    }

    // if (parts.length == 0) {
    //     setAttributes({
    //         parts: [{"label":"","value":0}],
    //         items: '[{"label":"","value":0}]',
    //     });
    // }

    let itemTypeExtras;

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
        "EventSeries", // pending
        "Festival",
        "FoodEvent",
        "Hackathon", // pending
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
        "ArchiveOrganization", // pending
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
        "3DModel", // pending
        "AudioObject",
        "DataDownload",
        "ImageObject",
        "LegislationObject", // pending
        "MusicVideoObject",
        "VideoObject",
      ],
      MusicPlaylist: ["MusicAlbum", "MusicRelease"],
      Organization: [
        "Airline",
        "Consortium", // pending
        "Corporation",
        "EducationalOrganization",
        "FundingScheme", // pending
        "GovernmentOrganization",
        "LibrarySystem", // pending
        "MedicalOrganization",
        "NewsMediaOrganization", // pending
        "NGO",
        "PerformingGroup",
        "Project", // pending
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
        // only subtypes that support reviews are included
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

    const addressInput = (
      <TextControl
        label={__("Address")}
        value={address}
        onChange={(address) => setAttributes({ address })}
      />
    );
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
                  aria-hidden="true"
                />
              </li>
            ))
          ) : (
            <span>{__("Cuisine list empty")}</span>
          )}
        </ul>
        <label htmlFor="review-input-id-asdqwekwfi">
          {__("Add a cuisine to the list")}
        </label>
        <input
          type="text"
          id="review-input-id-asdqwekwfi"
          value={lastCuisine}
          onKeyUp={(e) => {
            if (e.key === "Enter" && e.target.value !== "") {
              setAttributes({ cuisines: [...cuisines, e.target.value] });
              setState({ lastCuisine: "" });
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
                setState({
                  lastCuisine: latestItemArray[latestItemArray.length - 1],
                });
              }
            } else {
              setState({ lastCuisine: e.target.value });
            }
          }}
          onBlur={() => {
            if (lastCuisine !== "") {
              setAttributes({
                cuisines: [
                  ...(cuisines.length > 1 || cuisines[0] !== ""
                    ? cuisines
                    : []),
                  lastCuisine,
                ],
              });
              setState({ lastCuisine: "" });
            }
          }}
        />
      </>
    );

    const itemURLInput = (
      <div id="review_item_page_input">
        <URLInput
          label={__(`${itemType} Page`)}
          autoFocus={false}
          value={itemPage}
          onChange={(itemPage) => setAttributes({ itemPage })}
        />
      </div>
    );

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

    switch (itemType) {
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
            {itemURLInput}
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
                if (setEventEndDate && eventEndDate <= newDateVal) {
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
              checked={setEventEndDate}
              onChange={() => {
                setState({ setEventEndDate: !setEventEndDate });
                setAttributes({
                  eventEndDate: setEventEndDate ? 0 : 86400 + eventStartDate,
                });
              }}
            />
            {setEventEndDate && [
              <h3 key={i}>{__("Event end date")}</h3>,
              <DatePicker
                currentDate={eventEndDate * 1000}
                key={i}
                onChange={(newDate) =>
                  setAttributes({
                    eventEndDate: Math.floor(Date.parse(newDate) / 1000),
                  })
                }
              />,
            ]}
            <PanelBody title={__("Event venue")} initialOpen>
              <Button
                icon="admin-home"
                isPrimary={usePhysicalAddress}
                onClick={() => setAttributes({ usePhysicalAddress: true })}
                showTooltip
                label="Use physical location"
              />
              <Button
                icon="admin-site-alt3"
                isPrimary={!usePhysicalAddress}
                onClick={() => setAttributes({ usePhysicalAddress: false })}
                showTooltip
                label="Use virtual location"
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
            {itemURLInput}
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
        itemTypeExtras = itemURLInput;
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
              <h3>{__("Video upload date")}</h3>
              ,
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
      default:
        // there's nothing to add
        break;
    }

    const schemaDefaults = Object.keys({ ...attributes }).reduce(
      (defaults, attr) => {
        if (unusedDefaults.includes(attr)) {
          // eslint-disable-next-line no-param-reassign
          defaults[attr] = attributes[attr].default;
        }
        return defaults;
      },
      {}
    );

    const unusedAttributes = Object.keys(props.attributes).reduce(
      (defaults, attr) => {
        if (
          unusedDefaults.includes(attr) &&
          props.attributes[attr] !== schemaDefaults[attr]
        ) {
          // eslint-disable-next-line no-param-reassign
          defaults[attr] = attributes[attr].default;
        }
        return defaults;
      },
      {}
    );

    if (Object.keys(unusedAttributes).length) {
      setAttributes(unusedAttributes);
    }

    const parser = new DOMParser();

    if (!isLoaded) {
      setState({ isLoaded: true, setCTAFontSize: callToActionFontSize > 0 });
    }

    return [
      isSelected && (
        <InspectorControls>
          <PanelBody title={__("Review item rating format")}>
            <RadioControl
              selected={valueType}
              options={["star", "percent"].map((a) => ({
                label: __(a),
                value: a,
              }))}
              onChange={(newValueType) => {
                const factor = 100 / starCount;
                setAttributes({
                  valueType: newValueType,
                  parts: parts.map((p) => ({
                    label: p.label,
                    value:
                      valueType === "star"
                        ? p.value * factor
                        : p.value / factor,
                  })),
                  activePercentBarColor:
                    valueType === "star" && !activePercentBarColor
                      ? "#34495E"
                      : activePercentBarColor,
                });
              }}
            />
          </PanelBody>

          <PanelBody title={__("Value settings")} initialOpen={false}>
            {editedStar > -1 && (
              <RangeControl
                label={__(
                  `Value for ${
                    parser.parseFromString(
                      parts[editedStar]?.label || "",
                      "text/html"
                    ).body.textContent || "current feature"
                  }`
                )}
                value={parts[editedStar]?.value || 0}
                onChange={(newValue) => {
                  setAttributes({
                    parts: [
                      ...parts.slice(0, editedStar),
                      { ...parts[editedStar], value: newValue },
                      ...parts.slice(editedStar + 1),
                    ],
                  });
                }}
                min={valueType === "star" ? 0 : 1}
                max={valueType === "star" ? starCount : 100}
                step={valueType === "star" ? 0.1 : 1}
              />
            )}
            {valueType === "star" ? (
              <PanelColorSettings
                title={__("Star Colors")}
                initialOpen
                colorSettings={[
                  {
                    value: activeStarColor,
                    onChange: (colorValue) =>
                      setAttributes({ activeStarColor: colorValue }),
                    label: __("Active Star Color"),
                  },
                  {
                    value: inactiveStarColor,
                    onChange: (colorValue) =>
                      setAttributes({ inactiveStarColor: colorValue }),
                    label: __("Inactive Star Color"),
                  },
                  {
                    value: starOutlineColor,
                    onChange: (colorValue) =>
                      setAttributes({ starOutlineColor: colorValue }),
                    label: __("Star Outline Color"),
                  },
                ]}
              />
            ) : (
              <PanelColorSettings
                title={__("Percentage Bar Colors")}
                colorSettings={[
                  {
                    value: activePercentBarColor,
                    onChange: (colorValue) =>
                      setAttributes({ activePercentBarColor: colorValue }),
                    label: __("Main Color"),
                  },
                  {
                    value: percentBarColor,
                    onChange: (colorValue) =>
                      setAttributes({ percentBarColor: colorValue }),
                    label: __("Background Color"),
                  },
                ]}
              />
            )}
          </PanelBody>
          <PanelColorSettings
            title={__("Button Colors")}
            initialOpen={false}
            colorSettings={[
              {
                value: callToActionBackColor,
                onChange: (colorValue) =>
                  setAttributes({ callToActionBackColor: colorValue }),
                label: __("Button Background"),
              },
              {
                value: callToActionBorderColor,
                onChange: (colorValue) =>
                  setAttributes({ callToActionBorderColor: colorValue }),
                label: __("Button Border Color"),
              },
              {
                value: callToActionForeColor,
                onChange: (colorValue) =>
                  setAttributes({ callToActionForeColor: colorValue }),
                label: __("Button Text Color"),
              },
            ]}
          />
          <PanelBody title={__("Call to Action button")} initialOpen>
            <PanelRow>
              <label htmlFor="review-cta-enable">{__("Enable")}</label>
              <FormToggle
                id="review-cta-enable"
                label={__("Enable")}
                checked={enableCTA}
                onChange={() => setAttributes({ enableCTA: !enableCTA })}
              />
            </PanelRow>
            {enableCTA && (
              <>
                <PanelRow>
                  <label htmlFor="review-cta-nofollow">
                    {__("Add nofollow")}
                  </label>
                  <FormToggle
                    id="review-cta-nofollow"
                    label={__("Add nofollow")}
                    checked={ctaNoFollow}
                    onChange={() =>
                      setAttributes({ ctaNoFollow: !ctaNoFollow })
                    }
                  />
                </PanelRow>
                <PanelRow>
                  <label htmlFor="review-cta-openinnewtab">
                    {__("Open link in new tab")}
                  </label>
                  <FormToggle
                    id="review-cta-openinnewtab"
                    label={__("Open link in new tab")}
                    checked={ctaOpenInNewTab}
                    onChange={() =>
                      setAttributes({ ctaOpenInNewTab: !ctaOpenInNewTab })
                    }
                  />
                </PanelRow>
                <PanelRow>
                  <label htmlFor="review-cta-issponsored">
                    {__("Mark link as sponsored")}
                  </label>
                  <FormToggle
                    id="review-cta-issponsored"
                    label={__("Mark link as sponsored")}
                    checked={ctaIsSponsored}
                    onChange={() =>
                      setAttributes({ ctaIsSponsored: !ctaIsSponsored })
                    }
                  />
                </PanelRow>
                <PanelRow>
                  <label>{__("Alignment")}</label>
                  <ButtonGroup>
                    {["left", "center", "right"].map((a, i) => (
                      <Button
                        key={i}
                        icon={`align-${a}`}
                        isPrimary={ctaAlignment === a}
                        onClick={() => setAttributes({ ctaAlignment: a })}
                      />
                    ))}
                  </ButtonGroup>
                </PanelRow>
                <PanelRow>
                  <label htmlFor="review-cta-changefontsize">
                    {__("Change font size")}
                  </label>
                  <FormToggle
                    id="review-cta-changefontsize"
                    label={__("Change font size")}
                    checked={setCTAFontSize}
                    onChange={() => {
                      setState({ setCTAFontSize: !setCTAFontSize });
                      if (setCTAFontSize) {
                        setAttributes({ callToActionFontSize: 0 });
                      }
                    }}
                  />
                </PanelRow>
                {setCTAFontSize && (
                  <RangeControl
                    label={__("Font size")}
                    value={callToActionFontSize}
                    onChange={(callToActionFontSize) =>
                      setAttributes({ callToActionFontSize })
                    }
                    min={6}
                    max={50}
                  />
                )}
              </>
            )}
          </PanelBody>
          <PanelBody title={__("Review schema")} initialOpen>
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
                  if (enableReviewSchema) {
                    newAttributes = Object.assign(newAttributes, {
                      enableImage: false,
                      enableDescription: false,
                    });
                  }
                  setAttributes(newAttributes);
                }}
              />
            </PanelRow>
            <PanelRow>
              <label htmlFor="review-summary-toggle">
                {__("Use review summary")}
              </label>
              <FormToggle
                id="review-summary-toggle"
                label={__("Use review summary")}
                checked={useSummary}
                onChange={() => setAttributes({ useSummary: !useSummary })}
              />
            </PanelRow>
            {enableReviewSchema && (
              <>
                <SelectControl
                  label={__("Item type")}
                  value={itemType}
                  onChange={(itemType) => {
                    setAttributes({ itemType });
                    if (itemType === "Movie") {
                      setAttributes({ enableImage: true });
                    }
                    if (itemType === "Course") {
                      setAttributes({ enableDescription: true });
                    }
                    if (
                      !subtypeCategories.hasOwnProperty(itemType) ||
                      !subtypeCategories[itemType].includes(itemSubtype)
                    ) {
                      setAttributes({ itemSubtype: "", itemSubsubtype: "" });
                    }
                  }}
                  options={[
                    "Book",
                    "Course",
                    "CreativeWorkSeason",
                    "CreativeWorkSeries",
                    "Episode",
                    "Event",
                    "Game",
                    "LocalBusiness",
                    "MediaObject",
                    "Movie",
                    "MusicPlaylist",
                    "MusicRecording",
                    "Organization",
                    "Product",
                    "SoftwareApplication",
                  ].map((a) => ({ label: a, value: a }))}
                />
                {subtypeCategories.hasOwnProperty(itemType) && (
                  <SelectControl
                    label={__("Item subtype")}
                    value={itemSubtype}
                    onChange={(itemSubtype) => {
                      setAttributes({ itemSubtype });
                      if (itemSubtype === "VideoObject") {
                        setAttributes({ enableImage: true });
                      }
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
                    onChange={(itemSubsubtype) =>
                      setAttributes({ itemSubsubtype })
                    }
                    options={["", ...subsubtypes[itemSubtype]].map((a) => ({
                      label: a,
                      value: a,
                    }))}
                  />
                )}
              </>
            )}
            <>
              {!(
                enableReviewSchema &&
                (itemType === "Movie" || itemSubtype === "VideoObject")
              ) && (
                // images are required for these item types and optional for the rest
                <PanelRow>
                  <label htmlFor="review-image-toggle">
                    {__("Enable review image")}
                  </label>
                  <FormToggle
                    id="review-image-toggle"
                    label={__("Enable review image")}
                    checked={enableImage}
                    onChange={() =>
                      setAttributes({ enableImage: !enableImage })
                    }
                  />
                </PanelRow>
              )}
              {enableImage && (
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
              )}
              {(!enableReviewSchema || itemType !== "Course") && (
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
              )}
            </>
            {enableReviewSchema && (
              <>
                {itemTypeExtras}
                <TextControl
                  label={__("Review publisher")}
                  value={reviewPublisher}
                  onChange={(reviewPublisher) =>
                    setAttributes({ reviewPublisher })
                  }
                />
                <p>{__("Review publication date")}</p>
                <DatePicker
                  currentDate={reviewPublicationDate * 1000}
                  onChange={(newDate) =>
                    setAttributes({
                      reviewPublicationDate: Math.floor(
                        Date.parse(newDate) / 1000
                      ),
                    })
                  }
                />
                {["Event", "Product", "SoftwareApplication"].includes(
                  itemType
                ) && (
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
                      onChange={(offerCurrency) =>
                        setAttributes({ offerCurrency })
                      }
                    />
                    {offerType === "Offer" ? (
                      <>
                        <TextControl
                          label={__("Offer Price")}
                          value={offerPriceRaw}
                          onChange={(val) => {
                            if (!isNaN(Number(val))) {
                              setAttributes({ offerPrice: Number(val) });
                              setState({ offerPriceRaw: val });
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
                          onChange={(offerStatus) =>
                            setAttributes({ offerStatus })
                          }
                        />
                        <ToggleControl
                          label={__("Offer expiration")}
                          checked={offerExpiry > 0}
                          onChange={() =>
                            setAttributes({
                              offerExpiry: offerExpiry
                                ? 0
                                : 60 * (10080 + Math.ceil(Date.now() / 60000)), // default to one week from Date.now() when enabled
                            })
                          }
                        />
                        {offerExpiry > 0 && (
                          <DatePicker
                            currentDate={offerExpiry * 1000}
                            onChange={(newDate) =>
                              setAttributes({
                                offerExpiry: Math.floor(
                                  Date.parse(newDate) / 1000
                                ),
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
                          label={__(
                            `Lowest Available Price (${offerCurrency})`
                          )}
                          value={offerLowPriceRaw}
                          onChange={(val) => {
                            if (!isNaN(val)) {
                              setState({ offerLowPriceRaw: val });
                              setAttributes({ offerLowPrice: Number(val) });
                            }
                          }}
                        />
                        <TextControl
                          label={__(
                            `Highest Available Price (${offerCurrency})`
                          )}
                          value={offerHighPriceRaw}
                          onChange={(val) => {
                            if (!isNaN(val)) {
                              setState({ offerHighPriceRaw: val });
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
        </InspectorControls>
      ),
      isSelected && (
        <BlockControls>
          {editable !== "" && (
            <ToolbarGroup>
              {["left", "center", "right", "justify"].map((a, i) => (
                <ToolbarButton
                  icon={`editor-${a === "justify" ? a : `align${a}`}`}
                  label={__(
                    (a !== "justify" ? "Align " : "") +
                      a[0].toUpperCase() +
                      a.slice(1)
                  )}
                  key={i}
                  isActive={getCurrentAlignment(editable) === a}
                  onClick={() => setAlignment(editable, a)}
                />
              ))}
            </ToolbarGroup>
          )}
        </BlockControls>
      ),

      <Edit
        // {...props}
        isSelected={isSelected}
        authorName={authorName}
        itemName={itemName}
        description={description}
        descriptionEnabled={enableDescription}
        key={blockID}
        ID={blockID}
        imgID={imgID}
        imgAlt={imgAlt}
        imgURL={imgURL}
        imgPosition={imgPosition}
        imageEnabled={enableImage}
        valueType={valueType}
        items={parts.length == 0 ? JSON.parse(items) : parts}
        starCount={starCount}
        enableSummary={useSummary}
        summaryTitle={summaryTitle}
        summaryDescription={summaryDescription}
        callToActionText={callToActionText}
        callToActionURL={callToActionURL}
        callToActionBackColor={callToActionBackColor}
        callToActionBorderColor={callToActionBorderColor}
        callToActionForeColor={callToActionForeColor}
        callToActionAlignment={ctaAlignment}
        inactiveStarColor={inactiveStarColor}
        activeStarColor={activeStarColor}
        activePercentBarColor={activePercentBarColor}
        percentBarColor={percentBarColor}
        selectedStarColor={activeStarColor}
        starOutlineColor={starOutlineColor}
        setAttributes={(newValues) => setAttributes(newValues)}
        setAuthorName={(newValue) => setAttributes({ authorName: newValue })}
        setItemName={(newValue) => setAttributes({ itemName: newValue })}
        setDescription={(newValue) => setAttributes({ description: newValue })}
        setImage={(img) =>
          setAttributes({
            imgID: img.id,
            imgURL: img.url,
            imgAlt: img.alt,
          })
        }
        setItems={(newValue) => setAttributes({ parts: newValue })}
        setSummaryTitle={(newValue) =>
          setAttributes({ summaryTitle: newValue })
        }
        setSummaryDescription={(newValue) =>
          setAttributes({ summaryDescription: newValue })
        }
        setCallToActionText={(newValue) =>
          setAttributes({ callToActionText: newValue })
        }
        setCallToActionURL={(newValue) =>
          setAttributes({ callToActionURL: newValue })
        }
        hasFocus={isSelected}
        setEditable={(newValue) => setState({ editable: newValue })}
        setActiveStarIndex={(editedStar) => setState({ editedStar })}
        activeStarIndex={editedStar}
        alignments={{ titleAlign, authorAlign, descriptionAlign }}
        enableCTA={enableCTA}
        ctaNoFollow={ctaNoFollow}
        imageSize={imageSize}
        ctaFontSize={callToActionFontSize}
        measureCTAFontSize={setCTAFontSize}
        // {...props}
      />,
    ];
  }),
});
