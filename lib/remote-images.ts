import type { StaticImageData } from "next/image"

import accessories from "@/app/assets/images/photos/accessories.jpg"
import cameras from "@/app/assets/images/photos/cameras.jpg"
import locators from "@/app/assets/images/photos/locators.jpg"
import metal from "@/app/assets/images/photos/metal.jpg"
import pipeline from "@/app/assets/images/photos/pipeline.jpg"
import sonde from "@/app/assets/images/photos/sonde.jpg"
import survey from "@/app/assets/images/photos/survey.jpg"

import boutique from "@/app/assets/images/photos/boutique.jpg"
import brightOffice from "@/app/assets/images/photos/bright-office.jpg"
import cafe from "@/app/assets/images/photos/cafe.jpg"
import cityStreet from "@/app/assets/images/photos/city-street.jpg"
import cottage from "@/app/assets/images/photos/cottage.jpg"
import evCharger from "@/app/assets/images/photos/ev-charger.jpg"
import family from "@/app/assets/images/photos/family.jpg"
import handsSeedling from "@/app/assets/images/photos/hands-seedling.jpg"
import homeGarden from "@/app/assets/images/photos/home-garden.jpg"
import houseDusk from "@/app/assets/images/photos/house-dusk.jpg"
import leaves from "@/app/assets/images/photos/leaves.jpg"
import offshoreWind from "@/app/assets/images/photos/offshore-wind.jpg"
import rooftopSolar from "@/app/assets/images/photos/rooftop-solar.jpg"
import signing from "@/app/assets/images/photos/signing.jpg"
import smartPhone from "@/app/assets/images/photos/smart-phone.jpg"
import solarDusk from "@/app/assets/images/photos/solar-dusk.jpg"
import solarGrass from "@/app/assets/images/photos/solar-grass.jpg"
import solarRows from "@/app/assets/images/photos/solar-rows.jpg"
import sprout from "@/app/assets/images/photos/sprout.jpg"
import thermostat from "@/app/assets/images/photos/thermostat.jpg"

import familyHome from "@/app/assets/images/photos/family-home.jpg"
import generations from "@/app/assets/images/photos/generations.jpg"
import houseFront from "@/app/assets/images/photos/house-front.jpg"
import openRoad from "@/app/assets/images/photos/open-road.jpg"

import apartment from "@/app/assets/images/photos/apartment.jpg"
import blueHour from "@/app/assets/images/photos/blue-hour.jpg"
import cityGrid from "@/app/assets/images/photos/city-grid.jpg"
import desk from "@/app/assets/images/photos/desk.jpg"
import laptop from "@/app/assets/images/photos/laptop.jpg"
import lines from "@/app/assets/images/photos/lines.jpg"
import storefrontDusk from "@/app/assets/images/photos/storefront-dusk.jpg"
import windGray from "@/app/assets/images/photos/wind-gray.jpg"

/**
 * Local photography. Equipment photos are used by the product catalog and must
 * keep their keys. Everything else is editorial imagery from Unsplash (free license).
 */
export const PHOTOS = {
  // Equipment catalog (do not rename)
  survey,
  locators,
  sonde,
  cameras,
  pipeline,
  metal,
  accessories,

  // Clean power
  rooftopSolar,
  solarGrass,
  solarRows,
  solarDusk,
  offshoreWind,
  evCharger,
  thermostat,

  // Nature
  sprout,
  leaves,
  handsSeedling,

  // Homes and neighborhoods
  homeGarden,
  cottage,
  houseDusk,
  family,
  cityStreet,

  // Businesses and service
  cafe,
  boutique,
  brightOffice,
  smartPhone,
  signing,

  familyHome,
  generations,
  houseFront,
  openRoad,

  apartment,
  blueHour,
  cityGrid,
  desk,
  laptop,
  lines,
  storefrontDusk,
  windGray,
} as const satisfies Record<string, StaticImageData>

export type PhotoKey = keyof typeof PHOTOS
