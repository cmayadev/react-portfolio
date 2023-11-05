import tracking from "../../api/tracking.json";

const Tracking = () => {
  const filteredTracking = tracking.filter((track) => {
    const date = new Date(track.date_completed);
    const currentYear = new Date().getFullYear();
    return date.getFullYear() === currentYear;
  });

  return (
    <div id="tracking">
      <div className="container">
        <h1 className="tracking-title">Tracking</h1>
        <div className="filters"></div>
        <div className="grid-title">
          <h3 data-v-5ca09bd3="">
            Completed Games ({filteredTracking.length})
          </h3>
          <div data-v-5ca09bd3="" className="counter">
            2023
          </div>
        </div>
        <div className="results">
          {tracking
            .filter((track) => {
              const date = new Date(track.date_completed);
              const currentYear = new Date().getFullYear();
              return date.getFullYear() === currentYear;
            })
            .map((track) => {
              return (
                <div style={{ position: "relative" }}>
                  <div className="game-card" key={track.id}>
                    <div style={{ width: "100%", cursor: "inherit" }}>
                      <div style={{ position: "relative", width: "100%" }}>
                        <div
                          style={{
                            height: "158.625px",
                            position: "relative",
                            pointerEvents: "none",
                            overflow: "hidden",
                          }}
                        >
                          <div style={{ width: " 100%", height: "100%" }}>
                            <img
                              className="game-img"
                              src={track.image}
                              alt={track.name}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="game-title">
                      <div className="game-name">{track.name}</div>
                    </div>
                    <div style={{ paddingTop: "0px", paddingBottom: "10px" }}>
                      <div className="game-date">{track.date_completed}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
