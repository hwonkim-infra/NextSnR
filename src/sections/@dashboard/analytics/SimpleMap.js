
export default function SimpleMap() {
    const mapData = [
      { name: 'USA', coordinates: [-97.0, 38.0], tooltip: 'United States' },
      { name: 'CAN', coordinates: [-110.0, 60.0], tooltip: 'Canada' },
      { name: 'MEX', coordinates: [-102.0, 23.0], tooltip: 'Mexico' },
    ];
  
    return (
      <div>
        <ComposableMap>
          <Geographies geography={worldMap}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { NAME } = geo.properties;
                const mapDataObj = mapData.find((obj) => obj.name === countryCode);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tip={mapDataObj.tooltip}
                    onMouseEnter={() => {
                      ReactTooltip.show();
                    }}
                    onMouseLeave={() => {
                      ReactTooltip.hide();
                    }}
                    style={{
                      default: {
                        fill: '#D6D6DA',
                        outline: 'none',
                      },
                      hover: {
                        fill: '#F53',
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#E42',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <ReactTooltip />
      </div>
    );
  }
  