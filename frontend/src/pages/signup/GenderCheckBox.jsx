const GenderCheckbox = ({onCheckBoxChange, selectedGender}) => {
	return (

		<div className="px-2">
			<label className="label p-0 mb-2">
				<span className="text-base label-text text-gray-300">Gender</span>
			</label>
			<div className="flex gap-6">
				<div className="form-control">
					<label className={`label cursor-pointer gap-2 justify-start   ${selectedGender === "male" ? "selected" : ""}  `}  >
						<input type="checkbox" className="checkbox checkbox-sm checkbox-warning border-gray-500 
						checked:border-amber-500 [--chkbg:theme(colors.amber.500)] [--chkfg:theme(colors.gray.900)]"
							checked={selectedGender === "male"}
							onChange={() => onCheckBoxChange("male")}
						/>
						<span className="label-text text-gray-300">Male</span>
					</label>
				</div>
				<div className="form-control">
					<label className={`label cursor-pointer gap-2 justify-start   ${selectedGender === "female" ? "selected" : ""}  `} >
						<input type="checkbox" className="checkbox checkbox-sm checkbox-warning border-gray-500 
						checked:border-amber-500 [--chkbg:theme(colors.amber.500)] [--chkfg:theme(colors.gray.900)]"
							checked={selectedGender === "female"}
							onChange={() => onCheckBoxChange("female")}
						/>
						<span className="label-text text-gray-300">Female</span>
					</label>
				</div>
			</div>
		</div>
	);
};
export default GenderCheckbox;