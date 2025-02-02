export const resourse = [
    {
        id: "r0",
        name: "Resource0",
        groupOnly: true,
    },
    {
        id: "r1",
        name: "Resource1",
    },
    {
        id: "r2",
        name: "Resource2",
        parentId: "r0",
    },
    {
        id: "r3",
        name: "Resource3",
        parentId: "r4",
    },
    {
        id: "r4",
        name: "Resource4",
        parentId: "r2",
    },
];

export const resourseExample1 = [
    {
        id: "r163",
        name: "163",
    },
    {
        id: "r164",
        name: "164",
    },
    {
        id: "r165",
        name: "165",

    },
];

export const resourseExample2 = [
    {
        id: "rLine1",
        name: "Line1",
    },
    {
        id: "rLine2",
        name: "Line2",
    },
];

export const events = [
    {
        id: 1,
        start: "2024-12-23 09:45:00",
        end: "2024-12-23 12:30:00",
        resourceId: "r1",
        title: "Очень важная задача №1",
        bgColor: "#ef2e2e",
        // resizable: false,
        // movable: false,
        // startResizable: false,
    },
    {
        id: 2,
        start: "2024-12-22 12:30:00",
        end: "2024-12-23 23:30:00",
        resourceId: "r2",
        title: "Очень важная задача №2",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 3,
        start: "2024-12-23 12:30:00",
        end: "2024-12-23 23:30:00",
        resourceId: "r3",
        title: "Очень важная задача №3",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 4,
        start: "2024-12-23 14:30:00",
        end: "2024-12-23 23:30:00",
        resourceId: "r1",
        title: "Очень важная задача №4",
        resizable: false,
        movable: false,
        startResizable: false,
    },

];

export const events2 = [
    {
        id: 1,
        start: "2024-12-23 09:45:00",
        end: "2024-12-23 12:30:00",
        resourceId: "r1",
        title: "Очень важная задача №1",
        bgColor: "#47c034",
        // resizable: false,
        // movable: false,
        // startResizable: false,
    },
    {
        id: 2,
        start: "2024-12-22 12:30:00",
        end: "2024-12-23 23:30:00",
        resourceId: "r2",
        title: "Очень важная задача №2",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 3,
        start: "2024-12-23 12:30:00",
        end: "2024-12-23 23:30:00",
        resourceId: "r3",
        title: "Очень важная задача №3",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 4,
        start: "2024-12-23 14:30:00",
        end: "2024-12-23 23:30:00",
        resourceId: "r1",
        title: "Очень важная задача №4",
        resizable: false,
        movable: false,
        startResizable: false,
    },

];

export const eventsExample1 = [
    {
        id: 1,
        start: "2025-02-02 09:00:00",
        end: "2025-02-02 09:36:00",
        resourceId: "r163",
        title: "Job1",
        // bgColor: "#47c034",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 2,
        start: "2025-02-02 09:20:00",
        end: "2025-02-02 10:12:00",
        resourceId: "r164",
        title: "Job2",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 3,
        start: "2025-02-02 09:40:00",
        end: "2025-02-02 10:25:00",
        resourceId: "r165",
        title: "Job3",
        resizable: false,
        movable: false,
        startResizable: false,
    },

];

export const eventsExample2 = [
    {
        id: 1,
        start: "2025-02-02 09:00:00",
        end: "2025-02-02 09:36:00",
        resourceId: "rLine1",
        title: "Job1",
        // bgColor: "#47c034",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 2,
        start: "2025-02-02 09:20:00",
        end: "2025-02-02 10:12:00",
        resourceId: "rLine2",
        title: "Job2",
        resizable: false,
        movable: false,
        startResizable: false,
    },
    {
        id: 3,
        start: "2025-02-02 09:40:00",
        end: "2025-02-02 10:25:00",
        resourceId: "rLine1",
        title: "Job3",
        resizable: false,
        movable: false,
        startResizable: false,
    },
];

export const eventsJson = [
    {
        ID: "P1570С30",
        HardConstraintsPenalty: 0,
        MediumConstraintsPenalty1: -100,
        SoftConstraintsPenalty: -767,
        Projects: [163,164,165],
        Resources: ["Line1", "Line2"],
        AllocationList: [
            {
                ID: "Allocation1",
                PID: 163,
                JID: "Job1",
                StartDate: "2025-02-02 09:00:00",
                EndDate: "2025-02-02 09:36:00",
                Duration: 36,
                ResourceRequirementList: ["Line1"],
                PredAllocationList: []
            },
            {
                ID: "Allocation2",
                PID: "164",
                JID: "Job1",
                StartDate: "2025-02-02 09:20:00",
                EndDate: "2025-02-02 10:12:00",
                Duration: 36,
                ResourceRequirementList: ["Line2"],
                PredAllocationList: []
            },
            {
                ID: "Allocation3",
                PID: "165",
                JID: "Job1",
                StartDate: "2025-02-02 09:40:00",
                EndDate: "2025-02-02 10:25:00",
                Duration: 36,
                ResourceRequirementList: ["Line1"],
                PredAllocationList: []
            }
        ]
    }
]

export const eventsJson2 = `{
    "ID" : "P1570C30",
    "HardConstraintsPenalty" : 0,
    "MediumConstraintsPenalty1" : -12,
    "SoftConstraintsPenalty" : -8,
    "Projects" : [ "163", "164", "165" ],
    "Resources" : [ "Line1", "Line2" ],
    "AllocationList" : [ {
        "ID" : "Allocation1",
        "PID" : "163",
        "JID" : "SOURCE",
        "StartDate" : "2025-02-02T00:00:00",
        "EndDate" : "2025-02-02T23:59:59",
        "Duration" : 0,
        "PredAllocationList" : [ ],
        "ResourceRequirementList" : [ ]
    }, {
        "ID" : "Allocation2",
        "PID" : "163",
        "JID" : "Job1",
        "StartDate" : "2025-02-02T00:00:00",
        "EndDate" : "2025-02-03T00:59:59",
        "Duration" : 60,
        "PredAllocationList" : [ "Allocation1" ],
        "ResourceRequirementList" : [ "Line1" ]
    }, {
        "ID" : "Allocation3",
        "PID" : "163",
        "JID" : "SINK",
        "StartDate" : "2025-02-02T01:00:00",
        "EndDate" : "2025-02-03T00:59:59",
        "Duration" : 0,
        "PredAllocationList" : [ "Allocation2" ],
        "ResourceRequirementList" : [ ]
    }, {
        "ID" : "Allocation4",
        "PID" : "164",
        "JID" : "SOURCE",
        "StartDate" : "2025-02-02T00:04:00",
        "EndDate" : "2025-02-03T00:03:59",
        "Duration" : 0,
        "PredAllocationList" : [ ],
        "ResourceRequirementList" : [ ]
    }, {
        "ID" : "Allocation5",
        "PID" : "164",
        "JID" : "Job1",
        "StartDate" : "2025-02-02T00:04:00",
        "EndDate" : "2025-02-03T01:13:59",
        "Duration" : 70,
        "PredAllocationList" : [ "Allocation4" ],
        "ResourceRequirementList" : [ "Line2" ]
    }, {
        "ID" : "Allocation6",
        "PID" : "164",
        "JID" : "SINK",
        "StartDate" : "2025-02-02T01:14:00",
        "EndDate" : "2025-02-03T01:13:59",
        "Duration" : 0,
        "PredAllocationList" : [ "Allocation5" ],
        "ResourceRequirementList" : [ ]
    }, {
        "ID" : "Allocation7",
        "PID" : "165",
        "JID" : "SOURCE",
        "StartDate" : "2025-02-02T00:08:00",
        "EndDate" : "2025-02-03T00:07:59",
        "Duration" : 0,
        "PredAllocationList" : [ ],
        "ResourceRequirementList" : [ ]
    }, {
        "ID" : "Allocation8",
        "PID" : "165",
        "JID" : "Job1",
        "StartDate" : "2025-02-02T01:00:00",
        "EndDate" : "2025-02-03T01:59:59",
        "Duration" : 60,
        "PredAllocationList" : [ "Allocation7" ],
        "ResourceRequirementList" : [ "Line1" ]
    }, {
        "ID" : "Allocation9",
        "PID" : "165",
        "JID" : "SINK",
        "StartDate" : "2025-02-02T02:00:00",
        "EndDate" : "2025-02-03T01:59:59",
        "Duration" : 0,
        "PredAllocationList" : [ "Allocation8" ],
        "ResourceRequirementList" : [ ]
    } ]
}`


