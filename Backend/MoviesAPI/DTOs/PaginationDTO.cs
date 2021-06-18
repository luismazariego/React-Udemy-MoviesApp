namespace MoviesAPI.DTOs
{
    public class PaginationDTO
    {
        private int _recordsPerPage;
        const int MAX_RECORDS_PER_PAGE = 50;

        public int Page { get; set; } = 1;
        public int RecordsPerPage
        {
            get => _recordsPerPage;
            set => _recordsPerPage = value > MAX_RECORDS_PER_PAGE 
                ? MAX_RECORDS_PER_PAGE 
                : value;
        }
    }
}