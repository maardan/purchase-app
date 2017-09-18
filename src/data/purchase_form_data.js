const data = {
	"deployment_methods":
	[
	{
		"deployment_id": 1,
		"deployment_name": "Appliance"
	},
	{
		"deployment_id": 2,
		"deployment_name": "Virtual Appliance"
	},
	{
		"deployment_id": 3,
		"deployment_name": "Cloud Subscription"
	}
	],
	"products":
	[
	{
		"product_id": 1,
		"product_name": "Barracuda Backup",
		"product_models":
		[
		{
			"model_id": 1,
			"deployment_id": 1,
			"model_name": "B190",
			"model_price": 500
		},
		{
			"model_id": 2,
			"deployment_id": 1,
			"model_name": "B290",
			"model_price": 1500
		},
		{
			"model_id": 3,
			"deployment_id": 1,
			"model_name": "B390",
			"model_price": 2500
		},
		{
			"model_id": 4,
			"deployment_id": 3,
			"model_name": "Cloud-to-Cloud Backup",
			"model_price": 500
		}
		]
	},
	{
		"product_id": 2,
		"product_name": "NextGen Firewall",
		"product_models":
		[
		{
			"model_id": 5,
			"deployment_id": 1,
			"model_name": "FW100",
			"model_price": 1000
		},
		{
			"model_id": 6,
			"deployment_id": 1,
			"model_name": "FW200",
			"model_price": 1500
		},
		{
			"model_id": 7,
			"deployment_id": 1,
			"model_name": "FW300",
			"model_price": 3500
		},
		{
			"model_id": 8,
			"deployment_id": 1,
			"model_name": "FW400",
			"model_price": 5000
		},
		{
			"model_id": 9,
			"deployment_id": 2,
			"model_name": "FW100-V",
			"model_price": 500
		},
		{
			"model_id": 10,
			"deployment_id": 2,
			"model_name": "FW200-V",
			"model_price": 7500
		},
		{
			"model_id": 11,
			"deployment_id": 2,
			"model_name": "FW300-V",
			"model_price": 1750
		},
		{
			"model_id": 12,
			"deployment_id": 2,
			"model_name": "FW400-V",
			"model_price": 2500
		}
		]
	},
	{
		"product_id": 3,
		"product_name": "Email Security Gateway",
		"product_models":
		[
		{
			"model_id": 13,
			"deployment_id": 1,
			"model_name": "EM100",
			"model_price": 1000
		},
		{
			"model_id": 14,
			"deployment_id": 1,
			"model_name": "EM200",
			"model_price": 2000
		},
		{
			"model_id": 15,
			"deployment_id": 2,
			"model_name": "EM100-V",
			"model_price": 500
		},
		{
			"model_id": 16,
			"deployment_id": 2,
			"model_name": "EM200-V",
			"model_price": 1000
		},
		]
	}
	]
}

export default data;