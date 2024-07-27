import { useGetAllSemesterQuery } from "../../../redux/features/academic_semester/academicSemesterApi";

const AcademicSemester = () => {

    const { data, isError, isLoading, isSuccess } = useGetAllSemesterQuery(undefined)

    console.log({ data, isError, isLoading, isSuccess });

    return (
        <div>
            hi
        </div>
    );
};

export default AcademicSemester;