import 'jquery';
import { Car, Drone } from './classes/index.js'
import { fleet } from './services/fleet-data.js'
import { FleetDataService } from './services/fleet-data-service.js'
import { TitleBar } from './ui/title-bar.js'
import { DataTable } from './ui/data-table.js'
import {GoogleMap} from './ui/google-map.js'
import { HomePage } from './home-page.js'
import { CarsPage } from './cars-page.js'
import { MapPage } from './map-page.js'
import { ApplicationBase } from './framework/application-base.js'

export class App extends ApplicationBase {
    constructor() {
        super('Fleet Manager')
        this.dataService = new FleetDataService()
        this.dataService.loadData(fleet)

        this.addRoute('Home', new HomePage(), true)
        this.addRoute('Cars', new CarsPage())
        this.addRoute('Drones', null)
        this.addRoute('Map', new MapPage())

    }
}
export let application = new App()
application.show($('body'))


