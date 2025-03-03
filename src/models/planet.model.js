import mongoose from 'mongoose';

const PlanetSchema = new mongoose.Schema(
	{
		planetId: { type: Number, required: true, unique: true },
		name: String,
		affiliationReport: [
			{
				affiliation: { type: String, required: true },
				characters: [
					{
						id: { type: Number, required: true },
						name: { type: String, required: true },
						ki: { type: Number, default: 0 },
						race: { type: String },
						image: { type: String },
					},
				],
			},
		],
		createdAt: { type: Date, default: Date.now },
	},
	{ versionKey: false },
);

const Planet = mongoose.model('Planet', PlanetSchema);

export default Planet;
