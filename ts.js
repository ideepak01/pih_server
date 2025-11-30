let abc = [
  {
    kpiName: "Main KPI",
    actual: 100.0,
    plan: 90.0,
    subKpi: [
      {
        kpiName: "Sub 1",
        actual: 50.0,
        plan: 45.0,
        subKpi: [
          {
            kpiName: "Sub 1.1",
            actual: 25.0,
            plan: 20.0,
            subKpi: [
              {
                kpiName: "Sub 1",
                actual: 50.0,
                plan: 45.0,
                subKpi: [
                  {
                    kpiName: "Sub 1.1",
                    actual: 25.0,
                    plan: 20.0,
                    subKpi: [],
                  },
                ],
              },
              {
                kpiName: "Sub 2",
                actual: 30.0,
                plan: 25.0,
                subKpi: [],
              },
            ],
          },
        ],
      },
      {
        kpiName: "Sub 2",
        actual: 30.0,
        plan: 25.0,
        subKpi: [],
      },
    ],
  },
];
