import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as echarts from 'echarts';

@Component({
  selector: 'app-goalshigher',
  templateUrl: './goalshigher.component.html',
  styleUrls: ['./goalshigher.component.css']
})
export class GoalshigherComponent implements OnInit {

  // show loading spinner:
  mapLoaded = false;
  // empty option before geoJSON loaded:
  options = {};

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  loadMap(winner) {

    var defaultData = [
      { name: 'United States', value: 0 },
      { name: 'Afghanistan', value: 0 },
      { name: 'Angola', value: 0 },
      { name: 'Albania', value: 0 },
      { name: 'United Arab Emirates', value: 0 },
      { name: 'Argentina', value: 0 },
      { name: 'Armenia', value: 0 },
      { name: 'French Southern and Antarctic Lands', value: 0 },
      { name: 'Australia', value: 0 },
      { name: 'Austria', value: 0 },
      { name: 'Azerbaijan', value: 0 },
      { name: 'Burundi', value: 0 },
      { name: 'Belgium', value: 0 },
      { name: 'Benin', value: 0 },
      { name: 'Burkina Faso', value: 0 },
      { name: 'Bangladesh', value: 0 },
      { name: 'Bulgaria', value: 0 },
      { name: 'The Bahamas', value: 0 },
      { name: 'Bosnia and Herzegovina', value: 0 },
      { name: 'Belarus', value: 0 },
      { name: 'Belize', value: 0 },
      { name: 'Bermuda', value: 0 },
      { name: 'Bolivia', value: 0 },
      { name: 'Brazil', value: 0 },
      { name: 'Brunei', value: 0 },
      { name: 'Bhutan', value: 0 },
      { name: 'Botswana', value: 0 },
      { name: 'Central African Republic', value: 0 },
      { name: 'Canada', value: 0 },
      { name: 'Switzerland', value: 0 },
      { name: 'Chile', value: 0 },
      { name: 'China', value: 0 },
      { name: 'Ivory Coast', value: 0 },
      { name: 'Cameroon', value: 0 },
      { name: 'Democratic Republic of the Congo', value: 0 },
      { name: 'Republic of the Congo', value: 0 },
      { name: 'Colombia', value: 0 },
      { name: 'Costa Rica', value: 0 },
      { name: 'Cuba', value: 0 },
      { name: 'Northern Cyprus', value: 0 }, { name: 'Cyprus', value: 0 },
      { name: 'Czech Republic', value: 0 },
      { name: 'Germany', value: 0 },
      { name: 'Djibouti', value: 0 },
      { name: 'Denmark', value: 0 },
      { name: 'Dominican Republic', value: 0 },
      { name: 'Algeria', value: 0 },
      { name: 'Ecuador', value: 0 },
      { name: 'Egypt', value: 0 },
      { name: 'Eritrea', value: 0 },
      { name: 'Spain', value: 0 },
      { name: 'Estonia', value: 0 },
      { name: 'Ethiopia', value: 0 },
      { name: 'Finland', value: 0 },
      { name: 'Fiji', value: 0 },
      { name: 'Falkland Islands', value: 0 }, { name: 'France', value: 0 },
      { name: 'Gabon', value: 0 },
      { name: 'United Kingdom', value: 0 },
      { name: 'Georgia', value: 0 },
      { name: 'Ghana', value: 0 },
      { name: 'Guinea', value: 0 },
      { name: 'Gambia', value: 0 },
      { name: 'Guinea Bissau', value: 0 },
      { name: 'Equatorial Guinea', value: 0 },
      { name: 'Greece', value: 0 },
      { name: 'Greenland', value: 0 }, { name: 'Guatemala', value: 0 },
      { name: 'French Guiana', value: 0 },
      { name: 'Guyana', value: 0 },
      { name: 'Honduras', value: 0 },
      { name: 'Croatia', value: 0 },
      { name: 'Haiti', value: 0 },
      { name: 'Hungary', value: 0 },
      { name: 'Indonesia', value: 0 },
      { name: 'India', value: 0 },
      { name: 'Ireland', value: 0 },
      { name: 'Iran', value: 0 },
      { name: 'Iraq', value: 0 },
      { name: 'Iceland', value: 0 },
      { name: 'Israel', value: 0 },
      { name: 'Italy', value: 0 },
      { name: 'Jamaica', value: 0 },
      { name: 'Jordan', value: 0 },
      { name: 'Japan', value: 0 },
      { name: 'Kazakhstan', value: 0 },
      { name: 'Kenya', value: 0 },
      { name: 'Kyrgyzstan', value: 0 },
      { name: 'Cambodia', value: 0 },
      { name: 'South Korea', value: 0 },
      { name: 'Kosovo', value: 0 }, { name: 'Kuwait', value: 0 },
      { name: 'Laos', value: 0 },
      { name: 'Lebanon', value: 0 },
      { name: 'Liberia', value: 0 },
      { name: 'Libya', value: 0 },
      { name: 'Sri Lanka', value: 0 },
      { name: 'Lesotho', value: 0 },
      { name: 'Lithuania', value: 0 },
      { name: 'Luxembourg', value: 0 },
      { name: 'Latvia', value: 0 },
      { name: 'Morocco', value: 0 },
      { name: 'Moldova', value: 0 },
      { name: 'Madagascar', value: 0 },
      { name: 'Mexico', value: 0 },
      { name: 'Macedonia', value: 0 },
      { name: 'Mali', value: 0 },
      { name: 'Myanmar', value: 0 },
      { name: 'Montenegro', value: 0 },
      { name: 'Mongolia', value: 0 },
      { name: 'Mozambique', value: 0 },
      { name: 'Mauritania', value: 0 },
      { name: 'Malawi', value: 0 },
      { name: 'Malaysia', value: 0 },
      { name: 'Namibia', value: 0 },
      { name: 'New Caledonia', value: 0 },
      { name: 'Niger', value: 0 },
      { name: 'Nigeria', value: 0 },
      { name: 'Nicaragua', value: 0 },
      { name: 'Netherlands', value: 0 },
      { name: 'Norway', value: 0 },
      { name: 'Nepal', value: 0 },
      { name: 'New Zealand', value: 0 },
      { name: 'Oman', value: 0 },
      { name: 'Pakistan', value: 0 },
      { name: 'Panama', value: 0 },
      { name: 'Peru', value: 0 },
      { name: 'Philippines', value: 0 },
      { name: 'Papua New Guinea', value: 0 },
      { name: 'Poland', value: 0 },
      { name: 'Puerto Rico', value: 0 },
      { name: 'North Korea', value: 0 }, { name: 'Portugal', value: 0 },
      { name: 'Paraguay', value: 0 },
      { name: 'Qatar', value: 0 },
      { name: 'Romania', value: 0 },
      { name: 'Russia', value: 0 },
      { name: 'Rwanda', value: 0 },
      { name: 'Western Sahara', value: 0 },
      { name: 'Saudi Arabia', value: 0 },
      { name: 'Sudan', value: 0 },
      { name: 'South Sudan', value: 0 },
      { name: 'Senegal', value: 0 },
      { name: 'Solomon Islands', value: 0 },
      { name: 'Sierra Leone', value: 0 },
      { name: 'El Salvador', value: 0 },
      { name: 'Somaliland', value: 0 },
      { name: 'Somalia', value: 0 },
      { name: 'Republic of Serbia', value: 0 },
      { name: 'Suriname', value: 0 }, { name: 'Slovakia', value: 0 },
      { name: 'Slovenia', value: 0 },
      { name: 'Sweden', value: 0 },
      { name: 'Swaziland', value: 0 },
      { name: 'Syria', value: 0 },
      { name: 'Chad', value: 0 },
      { name: 'Togo', value: 0 },
      { name: 'Thailand', value: 0 },
      { name: 'Tajikistan', value: 0 },
      { name: 'Turkmenistan', value: 0 },
      { name: 'East Timor', value: 0 },
      { name: 'Trinidad and Tobago', value: 0 },
      { name: 'Tunisia', value: 0 },
      { name: 'Turkey', value: 0 },
      { name: 'United Republic of Tanzania', value: 0 },
      { name: 'Uganda', value: 0 },
      { name: 'Ukraine', value: 0 },
      { name: 'Uruguay', value: 0 },
      { name: 'Uzbekistan', value: 0 },
      { name: 'Venezuela', value: 0 },
      { name: 'Vietnam', value: 0 },
      { name: 'Vanuatu', value: 0 },
      { name: 'West Bank', value: 0 },
      { name: 'Yemen', value: 0 },
      { name: 'South Africa', value: 0 },
      { name: 'Zambia', value: 0 },
      { name: 'Zimbabwe', value: 0 }];


    defaultData.forEach(city => {
      city.value = winner[city.name];
    });



    // fetch map geo JSON data from server
    this.http.get('assets/data/HK.json')
      .subscribe(geoJson => {
        // hide loading:
        this.mapLoaded = true;
        // register map:
        echarts.registerMap('HK', JSON.parse(geoJson['_body']));
        // update options:
        this.options = {
          title: {
            text: 'FIFA WORLD CUP',
            subtext: 'Paises que más partidos han ganado',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} Partidos ganados'
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['lightskyblue', 'yellow', 'orangered']
            }
          },
          series: [
            {
              name: 'Partidos ganados',
              type: 'map',
              mapType: 'HK', // map type should be registered
              itemStyle: {
                normal: { label: { show: false } },
                emphasis: { label: { show: true } }
              },
              data: defaultData
            }
          ]
        };
      });
  }


  getData() {

    // fetch map geo JSON data from server
    this.http.get('assets/data/worldCupMatches.json')
      .subscribe(data => {

        var jsonMatches: any = JSON.parse(data['_body']);

        var winners = {};

        jsonMatches.forEach(match => {
          let comp_1 = match["Home Team Name"];
          let comp_2 = match["Away Team Name"];

          let winner = { name: '', goals: 0 };

          let goalsComp_1 = parseInt(match["Home Team Goals"]);
          let goalsComp_2 = parseInt(match["Away Team Goals"]);

          if (goalsComp_1 > goalsComp_2) {
            winners[comp_1] = (winners[comp_1] == undefined) ? 1 : winners[comp_1] + 1;
          } else if (goalsComp_1 < goalsComp_2) {
            winners[comp_2] = (winners[comp_2] == undefined) ? 1 : winners[comp_2] + 1;
          }
        });
        console.log(winners);

        this.loadMap(winners);




      }
    );
  }

}
